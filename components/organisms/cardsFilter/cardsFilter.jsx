"use client";
import { useState } from "react";
import { hotelsData } from "../../../services/getHotelsServices";
import MediaCard from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsFilter.module.css";
import { hotelRooms } from "@/utils/helper";

export const CardsFilter = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all")
  console.log(selectedSize);

  const filterHotels = (hotels) => {
    const filteredHotels = hotels.filter((hotel) => {
      const isCountryMatch =
        selectedCountry === "all" ||
        selectedCountry === hotel.country.toLowerCase();
      const isPriceMatch =
        selectedPrice === "all" || selectedPrice === `$`.repeat(hotel.price);
      const isSizeMatch = selectedSize === "all" || selectedSize === hotelRooms(hotel.rooms)

      return isCountryMatch && isPriceMatch &&  isSizeMatch;
    });
    return filteredHotels;
  };

  return (
    <>
      <Header
        updateCountry={setSelectedCountry}
        updatePrice={setSelectedPrice}
        updateSize={setSelectedSize}
      />
      <div className={styles.cardsContainer}>
        {filterHotels(hotelsData).map((hotel, index) => {
          return (
            <MediaCard
              key={index}
              hotel={hotel}
            />
          );
        })}
      </div>
    </>
  );
};

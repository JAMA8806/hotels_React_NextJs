"use client";
import { useState } from "react";
import { hotelsData } from "../../../services/getHotelsServices";
import MediaCard from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsFilter.module.css";
import { hotelRooms } from "@/utils/helper";
import { Alert, AlertTitle } from "@mui/material";

export const CardsFilter = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [dateFrom, setDateFrom] = useState("all");
  const [dateTo, setDateTo] = useState("all");
  
  const filterHotels = (hotels) => {
    const newDateFrom = new Date(dateFrom)
    const newDateTo = new Date(dateTo)
    const Today = new Date().setHours(0,0,0,0)
    const newDateFromLocal = new Date(
      newDateFrom.getTime() + newDateFrom.getTimezoneOffset() * 60000
    )
    const newDateToLocal = new Date(
      newDateTo.getTime() + newDateTo.getTimezoneOffset() * 60000
    )
    
    const filteredHotels = hotels.filter((hotel) => {
      const hotelsAvailability = Today + hotel.availabilityFrom
      const availabilityDays = hotelsAvailability + hotel.availabilityTo
      
      
      const isCountryMatch =
        selectedCountry === "all" ||
        selectedCountry === hotel.country.toLowerCase();
      const isPriceMatch =
        selectedPrice === "all" || selectedPrice === `$`.repeat(hotel.price);
      const isSizeMatch =
        selectedSize === "all" || selectedSize === hotelRooms(hotel.rooms);
      const isAvailable = (dateFrom ==='all'  &&  dateTo ==='all' || newDateFromLocal >= hotelsAvailability && newDateToLocal <= availabilityDays )

      return isCountryMatch && isPriceMatch && isSizeMatch && isAvailable;
    });
    return filteredHotels;
  };

  return (
    <>
      <Header
        updateCountry={setSelectedCountry}
        updatePrice={setSelectedPrice}
        updateSize={setSelectedSize}
        updateFrom={setDateFrom}
        updateTo={setDateTo}
      />
      <div className={styles.cardsContainer}>
        {filterHotels(hotelsData).length > 0 ? (
          filterHotels(hotelsData).map((hotel, index) => {
            return (
              <MediaCard
                key={index}
                hotel={hotel}
              />
            );
          })
        ) : (
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            Cambia tu configuración — <strong>No hay hoteles</strong>
          </Alert>
        )}
      </div>
    </>
  );
};

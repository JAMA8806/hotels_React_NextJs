"use client";
import { useEffect, useState } from "react";
// import { hotelData } from "../../../services/getHotelsServices"; Service conf #1
import MediaCard from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsFilter.module.css";
import { hotelRooms } from "@/utils/helper";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import Navbar from "../../atoms/button/navbar/navbar";

export const CardsFilter = ({ getHotelsData }) => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [dateFrom, setDateFrom] = useState("all");
  const [dateTo, setDateTo] = useState("all");
  const [filterHotels, setFilterHotels] = useState([]);
  const [snackbar, setSnackbar] = useState(false);

  // Services Configuration #1 - useEffect and useState
  // const [hotelsData, setHotelsData] = useState([]);

  // const hotelsFetch = async() =>{
  //   try {
  //     const data = await hotelData();
  //     setHotelsData(data);
  //     console.log(data);

  //   } catch (error) {
  //     console.error("error on getting the hotels data")
  //   }

  // }
  // useEffect(()=>{
  //   hotelsFetch();
  // },{});
  useEffect(() => {
    const newDateFrom = new Date(dateFrom);
    const newDateTo = new Date(dateTo);
    const Today = new Date().setHours(0, 0, 0, 0);
    const newDateFromLocal = new Date(
      newDateFrom.getTime() + newDateFrom.getTimezoneOffset() * 60000
    );
    const newDateToLocal = new Date(
      newDateTo.getTime() + newDateTo.getTimezoneOffset() * 60000
    );
    const filteredHotels = getHotelsData.filter((hotel) => {
      const hotelsAvailability = Today + hotel.availabilityFrom;
      const availabilityDays = hotelsAvailability + hotel.availabilityTo;

      const isCountryMatch =
        selectedCountry === "all" ||
        selectedCountry === hotel.country.toLowerCase();
      const isPriceMatch =
        selectedPrice === "all" || selectedPrice === `$`.repeat(hotel.price);
      const isSizeMatch =
        selectedSize === "all" || selectedSize === hotelRooms(hotel.rooms);
      const isAvailable =
        (dateFrom === "all" && dateTo === "all") ||
        (newDateFromLocal >= hotelsAvailability &&
          newDateToLocal <= availabilityDays);

      return isCountryMatch && isPriceMatch && isSizeMatch && isAvailable;
    });
    setFilterHotels(filteredHotels);
  }, [selectedCountry, selectedPrice, selectedSize, dateFrom, dateTo]);

  const updateReset = () => {
    setSelectedCountry("all");
    setSelectedPrice("all");
    setSelectedSize("all");
    setDateFrom("all");
    setDateTo("all");
  };
  // return filterHotels;

  return (
    <>
      <Navbar>
      </Navbar>
      <Header
        updateCountry={setSelectedCountry}
        updatePrice={setSelectedPrice}
        updateSize={setSelectedSize}
        updateFrom={setDateFrom}
        updateTo={setDateTo}
        updateReset={updateReset}
      />
      <div className={styles.cardsContainer}>
        {filterHotels.length > 0 ? (
          filterHotels.map((hotel, index) => {
            return (
              <MediaCard
                key={index}
                hotel={hotel}
                snackbar={setSnackbar}
              />
            );
          })
        ) : (
          <Alert
            className={styles.alert}
            severity="info">
            <AlertTitle>Info</AlertTitle>
            Cambia tu configuración — <strong>No hay hoteles</strong>
          </Alert>
        )}
      </div>
      <Snackbar
        open={snackbar}
        autoHideDuration={2500}
        onClose={setSnackbar}>
        <Alert
          severity="success"
          sx={{ width: "100%" }}>
          Hotel agregado correctamente
        </Alert>
      </Snackbar>
    </>
  );
};

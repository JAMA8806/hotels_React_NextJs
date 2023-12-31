"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import { AppContext } from "@/store/CurrentProvider";

const Detail = () => {
  
  const [selectedHotel, setSelectedHotel] = useState({
    name: "",
    description: "",
    country: "",
    photo: "",
  });

  const {setDetailPage} = useContext(AppContext)

  useEffect(() => {
    const storedHotel = localStorage.getItem("selectedHotel");
    if (storedHotel) {
      setSelectedHotel(JSON.parse(storedHotel));
    }
    setDetailPage()
  }, []);
  const { name, photo, description } = selectedHotel;
  //   console.log(selectedHotel);
  return (
    <div className={styles.containerInfo}>
      <img
        className={styles.img}
        src={photo}
        alt={`Imagen de ${name}`}
      />
      <h1 className={styles.titleHotel}>{name}</h1>
      <p className={styles.descriptionHotel}>{description}</p>
      <div
      className={styles.containerButton}
      >
        <Button
        size="small"
        className={styles.buttonCardHotel}
        >
        Reservar
      </Button>
      <Button
        size="small"
        className={styles.secondaryButton}>
        Favoritos
      </Button>
      </div>
      
    </div>
  );
};

export default Detail;

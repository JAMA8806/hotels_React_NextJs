"use client";
import React from "react";
import { ReservationsTemplate } from "../../../components/templates/cardsFilter-template/reservationsTemplate/reservationsTemplate";
import styles from "./page.module.css";
const Reservations = () => {
  return (
    <div className={styles.reservationsContainer}>
      <h1 className={styles.h1}>Hotels reservations</h1>
      <div>
        <ReservationsTemplate></ReservationsTemplate>
      </div>
    </div>
  );
};

export default Reservations;

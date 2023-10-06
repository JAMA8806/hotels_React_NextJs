"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import MediaCard from '../../../molecules/card/card';
import styles from './hotelsReservations.module.css'
export const HotelsReservations = () => {
    const hotelsReservationList = useSelector(
        (state) => state.reservation.hotelsReservation
      );
      
  return (
    <div className={styles.cardsContainer}>
        {hotelsReservationList.map((hotel,index)=>{
            
            return (
                <MediaCard key={index} hotel={hotel.payload}>Cards</MediaCard>
            )
    })}
    </div>
  )
}

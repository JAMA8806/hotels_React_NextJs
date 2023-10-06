"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import MediaCard from '../../../molecules/card/card';

export const HotelsReservations = () => {
    const hotelsReservationList = useSelector(
        (state) => state.reservation.hotelsReservation
      );
      console.log(hotelsReservationList);
  return (
    <div>
        {hotelsReservationList.map((hotel,index)=>{
            console.log(hotel.payload);
            return (
                <MediaCard key={index} hotel={hotel.payload}>Cards</MediaCard>
            )
    })}
    </div>
  )
}

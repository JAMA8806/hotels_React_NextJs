"use client"
import React from 'react'
import { ReservationsTemplate } from '../../../components/templates/cardsFilter-template/reservationsTemplate/reservationsTemplate'

const Reservations = () => {
  return (
    <div>
        <h1>
            Hotels reservations
        </h1>
        <ReservationsTemplate></ReservationsTemplate>
    </div>
  )
}

export default Reservations;
import { createSlice } from "@reduxjs/toolkit";

export const ReservationSlice = createSlice({
    name: "reservation",
    initialState: {
        hotelsReservation:[]
    },
    reducers:{
        addReservation:(state,payload) =>{
            state.hotelsReservation.push(payload)
        }
    }
});

export const {addReservation} = ReservationSlice.actions;
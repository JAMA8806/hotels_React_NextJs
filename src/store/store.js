import {configureStore} from '@reduxjs/toolkit'
import { ReservationSlice } from './reservationSlice'

const store = configureStore({
    reducer:{
        reservation: ReservationSlice.reducer
    }
});

export default store;
import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
    const {availableTimes, dispatch, submitForm} = props;
    return (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    )
}

export default Booking;
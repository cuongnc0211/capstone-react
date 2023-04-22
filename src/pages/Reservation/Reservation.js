import React from 'react';
import ReservationForm from './ReservationForm';
import { fetchAPI, submitAPI } from './API.js';
import { useNavigate } from "react-router-dom";
import { useState, useReducer } from 'react';

const Reservation = () => {
  const [date, setDate] = useState(null)
  const [time, setTime] = useState('17:00')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')
  const navigate = useNavigate();

  // Define timesReducer function to handle state updates for available times
  function timesReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return action.payload;
      default:
        return state;
    }
  }

  function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }

  const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());

  function submitReservation(e) {
    e.preventDefault();
    let result = submitAPI({date: date, time: time, guests: guests, occasion: occasion})
    if(result === true) {
      navigate('/confirmed_booking')
    }
  }

  function changeDate(value) {
    console.log(`Date value: ${value}`)
    setDate(value);
    updateTime(value)
  }

  function updateTime(date) {
    console.log(date)

    date = new Date(date)
    const times = fetchAPI(date)
    dispatch({type: 'UPDATE_TIMES', payload: times})
  }

  function changeTime(value) {
    console.log(`Time value: ${value}`)
    setTime(value);
  }

  function changeGuests(value) {
    console.log(`Guests value: ${value}`)
    setGuests(value);
  }

  function changeOcassion(value) {
    console.log(`Ocassion value: ${value}`)
    setOccasion(value);
  }

  return (
    <main>
      <section>
        <h1>Book a Table</h1>
        <ReservationForm availableTimes={availableTimes} changeDate={changeDate} changeTime={changeTime} changeGuests={changeGuests} changeOcassion={changeOcassion} submitReservation={submitReservation} />
      </section>
    </main>
  );
};

export default Reservation;
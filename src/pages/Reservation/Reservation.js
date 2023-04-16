import React from 'react';
import ReservationForm from './ReservationForm';
import { useState, useReducer } from 'react';

const Reservation = () => {
  const [date, setDate] = useState(null)
  const [time, setTime] = useState('17:00')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

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

  function changeDate(value) {
    console.log(`Date value: ${value}`)
    setDate(value);
    updateTime(value)
  }

  function updateTime(date) {
    console.log(date)
    const times = ['17:00', '18:00', '19:00']
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
        <h1>Reservation Page</h1>

        <ReservationForm availableTimes={availableTimes} changeDate={changeDate} changeTime={changeTime} changeGuests={changeGuests} changeOcassion={changeOcassion} />
      </section>
    </main>
  );
};

export default Reservation;
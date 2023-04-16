import React from 'react';
import ReservationForm from './ReservationForm';
import { useState } from 'react';

const Reservation = () => {
  const [date, setDate] = useState(null)
  const [time, setTime] = useState('17:00')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  function changeDate(value) {
    console.log(`Date value: ${value}`)
    setDate(value);
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

        <ReservationForm changeDate={changeDate} changeTime={changeTime} changeGuests={changeGuests} changeOcassion={changeOcassion} />
      </section>
    </main>
  );
};

export default Reservation;
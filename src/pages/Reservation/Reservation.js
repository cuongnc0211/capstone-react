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
  const [errors, setErrors] = useState({});
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

  function updateTime(date) {
    date = new Date(date)
    const times = fetchAPI(date)
    dispatch({type: 'UPDATE_TIMES', payload: times})
  }

  function changeDate(value) {
    const date = new Date(value)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if(date >= today ) {
      setDate(date);
      updateTime(value)
      const {date: _, ...newErrors} = errors // remove the date error
      setErrors(newErrors);
    } else {
      let newErrors = {...errors}
      newErrors['date'] = 'Please do not choose past date.'
      setErrors(newErrors);
    }
  }

  function changeTime(value) {
    const today = new Date

    const timeString = value;
    const [hours, minutes] = timeString.split(':');

    const selectedTime = new Date();
    selectedTime.setHours(hours);
    selectedTime.setMinutes(minutes);
    selectedTime.setHours(selectedTime.getHours() - 1);

    if(date.toDateString() === today.toDateString() && selectedTime < today) {
      let newErrors = {...errors}
      newErrors['time'] = 'Please reserve table at least 1 hour from now.'
      setErrors(newErrors);
    } else {
      setTime(value);
      const {time: _, ...newErrors} = errors // remove the date error
      setErrors(newErrors);
    }
  }

  function changeGuests(value) {
    if(value === '') {
      let newErrors = {...errors}
      newErrors['guests'] = 'Guests number can not be blank.'
      setErrors(newErrors);
      return;
    }

    const guests = parseInt(value);
    if(guests > 0) {
      setGuests(value);
      const {guests: _, ...newErrors} = errors // remove the date error
      setErrors(newErrors);
    } else {
      let newErrors = {...errors}
      newErrors['guests'] = 'Please input guest number greater than zero.'
      setErrors(newErrors);
    }
  }

  function changeOcassion(value) {
    console.log(`Ocassion value: ${value}`)
    setOccasion(value);
  }

  return (
    <main>
      <section>
        <h1>Book a Table</h1>
        <ReservationForm availableTimes={availableTimes} changeDate={changeDate} changeTime={changeTime} changeGuests={changeGuests} changeOcassion={changeOcassion} submitReservation={submitReservation} errors={errors} />
      </section>
    </main>
  );
};

export default Reservation;
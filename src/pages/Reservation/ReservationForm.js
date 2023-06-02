import React, { useState } from 'react';
import { useRef } from 'react';

const ReservationForm = (props) => {
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const guestsRef = useRef(null);
  const ocassionRef = useRef(null);

  const handleChangeDate = () => {
    props.changeDate(dateRef.current.value)
  };
  const handleChangeTime = () => {
    props.changeTime(timeRef.current.value)
  };
  const handleChangeGuests = () => {
    props.changeGuests(guestsRef.current.value)
  };
  const handleChangeOcassion = () => {
    props.changeOcassion(ocassionRef.current.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitReservation(e)
  }

  return (
    <form style={{display: 'grid', maxWidth: 500, gap: 10, marginBottom: 20, marginTop: '30px'}} onSubmit={handleSubmit}>
      <label className='label-control' htmlFor="res-date">Choose date</label>
      <input className='form-control' type="date" ref={dateRef} id="res-date" onChange={handleChangeDate} required />
      <p style={{color: 'red'}}>{ props.errors['date'] }</p>
      <br />

      <label className='label-control' htmlFor="res-time">Choose time</label>
      <select className='form-control' id="res-time" ref={timeRef} onChange={handleChangeTime}>
        {
          props.availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            )
          )
        }
      </select>
      <p style={{color: 'red'}}>{ props.errors['time'] }</p>
      <br />

      <label className='label-control' htmlFor="guests">Number of guests</label>
      <input className='form-control' type="number" required placeholder='input the guests number' min={1} max={10} id="guests" ref={guestsRef} onChange={handleChangeGuests} />
      <p style={{color: 'red'}}>{ props.errors['guests'] }</p>
      <br />

      <label className='label-control' htmlFor="occasion">Occasion</label>
      <select className='form-control' id="occasion" ref={ocassionRef} onChange={handleChangeOcassion}>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Normal dining</option>
      </select>
      <br />

      <button
        type="submit"
        className="btn btn-success"
        disabled={Object.keys(props.errors).length > 0 ? true : undefined}
      >
        Make Your reservation
      </button>

      <br />
    </form>
  );
};

export default ReservationForm;
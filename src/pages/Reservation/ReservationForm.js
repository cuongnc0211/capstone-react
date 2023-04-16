import React from 'react';
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

  return (
    <form style={{display: 'grid', maxWidth: 200, gap: 20, marginBottom: 20}}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" ref={dateRef} id="res-date" onChange={handleChangeDate} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time " ref={timeRef} onChange={handleChangeTime}>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder={1} min={1} max={10} id="guests" ref={guestsRef} onChange={handleChangeGuests} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" ref={ocassionRef} onChange={handleChangeOcassion}>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Normal dining</option>
      </select>
      <input type="submit" defaultValue="Make Your reservation" />
    </form>
  );
};

export default ReservationForm;
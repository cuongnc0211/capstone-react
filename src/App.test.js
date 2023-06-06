import { render, screen } from '@testing-library/react';
import Reservation from './pages/Reservation';
import {within, fireEvent, waitFor} from '@testing-library/dom'
import { MemoryRouter } from 'react-router-dom';
import 'jest-date-mock';

// beforeEach(() => {
//   const desiredDate = new Date('2023-06-06T019:00:00');
//   jest.setSystemTime(desiredDate);
// });

// afterEach(() => {
//   jest.clearAllTimers();
//   jest.useRealTimers();
// });


test('Renders the Reservation Page', () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );
  const titleElement = screen.getByText(/Book a Table/);
  expect(titleElement).toBeInTheDocument();
});

test('Renders correct intital available time', () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );

  const selectElement = screen.getByRole('combobox', { name: /Choose time/i });
  expect(selectElement).toBeInTheDocument();

  const optionElements = within(selectElement).getAllByRole('option', { container: selectElement });
  const availableTimes = optionElements.map((option) => option.value);

  expect(availableTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('Update available time', () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );

  const selectDate= screen.getByLabelText(/Choose date/i);
  expect(selectDate).toBeInTheDocument();

  fireEvent.change(selectDate, { target: { value: '2023-12-01' } });
  waitFor(() => expect(fetchAPI).toHaveBeenCalledWith(new Date('2023-12-01')));
  const selectElement = screen.getByRole('combobox', { name: /Choose time/i });
  expect(selectElement).toBeInTheDocument();

  const optionElements = within(selectElement).getAllByRole('option', { container: selectElement });
  const availableTimes = optionElements.map((option) => option.value);

  expect(availableTimes).not.toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('Validate form input', () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );

  const selectDate= screen.getByLabelText(/Choose date/i);
  expect(selectDate).toBeInTheDocument();

  fireEvent.change(selectDate, { target: { value: '2023-01-01' } });
  const dateErrorMsg= screen.getByText(/Please do not choose past date/i);
  expect(dateErrorMsg).toBeInTheDocument();

  fireEvent.change(selectDate, { target: { value: '2023-12-12' } });
  const selectTime = screen.getByRole('combobox', { name: /Choose time/i });
  fireEvent.change(selectTime, { target: { value: '18:00' } });


  const inputGuests= screen.getByLabelText(/Number of guests/i);
  fireEvent.change(inputGuests, { target: { value: '0' } });
  const guestErrorMsg= screen.getByText(/Please input guest number greater than zero/i);
  expect(guestErrorMsg).toBeInTheDocument();

  fireEvent.change(inputGuests, { target: { value: '' } });
});

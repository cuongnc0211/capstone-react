import { render, screen } from '@testing-library/react';
import Reservation from './pages/Reservation';
import {within, fireEvent, waitFor} from '@testing-library/dom'

test('Renders the Reservation Page', () => {
  render(<Reservation />);
  const titleElement = screen.getByText(/Book a Table/);
  expect(titleElement).toBeInTheDocument();
});

test('Renders correct intital available time', () => {
  render(<Reservation />);

  const selectElement = screen.getByRole('combobox', { name: /Choose time/i });
  expect(selectElement).toBeInTheDocument();

  const optionElements = within(selectElement).getAllByRole('option', { container: selectElement });
  const availableTimes = optionElements.map((option) => option.value);

  expect(availableTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('Update available time', () => {
  render(<Reservation />);

  const selectDate= screen.getByLabelText(/Choose date/i);
  expect(selectDate).toBeInTheDocument();

  fireEvent.change(selectDate, { target: { value: '2023-05-01' } });
  waitFor(() => expect(fetchAPI).toHaveBeenCalledWith(new Date('2023-05-01')));
  const selectElement = screen.getByRole('combobox', { name: /Choose time/i });
  expect(selectElement).toBeInTheDocument();

  const optionElements = within(selectElement).getAllByRole('option', { container: selectElement });
  const availableTimes = optionElements.map((option) => option.value);

  expect(availableTimes).not.toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

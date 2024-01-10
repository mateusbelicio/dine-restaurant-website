import { twMerge } from 'tailwind-merge';

import Button from '../ui/Button';
import { InputText, InputEmail, InputNumber, InputDate, InputTime } from './Inputs';

const ReservationForm = ({ className }) => {
  return (
    <form
      noValidate
      className={twMerge(
        'lg:pattern-lines flex flex-col gap-y-8 bg-white p-8 text-lg leading-7 before:bottom-0 before:left-0 before:-z-10 before:-translate-x-1/2 before:translate-y-1/2 sm:p-12',
        className
      )}
    >
      <InputText id="in-name" label="Name" placeholder="Name" />
      <InputEmail id="in-email" label="Email" placeholder="Email" />

      <InputDate id="in-date" label="Pick a date" />
      <InputTime id="in-time" label="Pick a time" />

      <InputNumber id="in-number" label="Number of people" />
      <Button type="submit" variant="black">
        Make Reservation
      </Button>
    </form>
  );
};

export default ReservationForm;

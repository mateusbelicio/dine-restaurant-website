import Button from './ui/Button';
import { InputText, InputEmail, InputNumber, InputDate, InputTime } from './Inputs';

const ReservationForm = ({ className }) => {
  return (
    <form
      noValidate
      className={
        'flex flex-col gap-y-8 bg-white p-8 text-lg leading-7 sm:p-12 ' + (className || '')
      }
    >
      <InputText id="in-name" label="Name" placeholder="Name" />
      <InputEmail id="in-email" label="Email" placeholder="Email" />

      <InputDate id="in-date" label="Pick a date" />
      <InputTime id="in-time" label="Pick a time" />

      {/* <label htmlFor='in-date'>Pick a date</label>
      <input type='date' className='appearance-none' name='' id='in-date' /> */}
      {/* <label htmlFor='in-time'>Pick a date</label>
      <input type='time' name='' id='in-time' /> */}

      <InputNumber id="in-number" label="Number of people" />
      <Button type="submit" variant="black">
        Make Reservation
      </Button>
    </form>
  );
};

export default ReservationForm;

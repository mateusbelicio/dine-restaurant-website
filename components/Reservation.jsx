import Logo from './Logo';
import ImageOptimized from './ImageOptimized';
import ReservationForm from './ReservationForm';

export const Reservation = () => {
  return (
    <section className="pattern-curve-br relative pt-14 md:before:bottom-0">
      <ImageOptimized
        path="/booking/hero-bg"
        type="jpg"
        alt="ALT TODO"
        classImage="w-full h-full object-cover object-top"
        className="absolute inset-0 bottom-auto z-0 h-full max-h-[37.5rem] w-full overflow-hidden"
      />
      <div className="main-container main-grid md:items-start md:gap-y-[9.625rem]">
        <Logo className="isolate sm:col-span-full md:justify-self-start" />
        <div className="isolate flex flex-col gap-y-3 text-center text-white sm:col-span-full md:col-span-5 md:text-left">
          <h1 className="heading-xl mt-8 sm:mt-0">Reservations</h1>
          <p className="">
            We can’t wait to host you. If you have any special requirements please feel free to call
            on the phone number below. We’ll be happy to accommodate you.
          </p>
        </div>
        <ReservationForm className="isolate mx-auto my-24 w-full max-w-[33.75rem] shadow-default sm:col-start-2 sm:col-end-12 md:col-start-7 md:col-end-13 md:mt-0" />
      </div>
    </section>
  );
};

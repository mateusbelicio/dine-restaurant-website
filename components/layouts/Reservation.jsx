import Logo from '../ui/Logo';
import ImageOptimized from '../ImageOptimized';
import ReservationForm from '../form/ReservationForm';

export const ReservationSection = () => {
  return (
    <section className="pattern-curve-br relative pt-14 lg:before:bottom-0">
      <ImageOptimized
        path="/booking/hero-bg"
        type="jpg"
        alt="An open-faced tuna sandwich with lemon, toasted sesame seeds and other ingredients."
        classImage="w-full h-full object-cover object-top"
        className="absolute inset-0 bottom-auto -z-10 h-full max-h-[37.5rem] w-full overflow-hidden"
      />
      <div className="main-container main-grid lg:items-start lg:gap-y-[9.625rem]">
        <Logo className="sm:col-span-full md:justify-self-start" />
        <div className="flex flex-col gap-y-3 text-center text-white sm:col-span-full lg:col-span-5 lg:text-left">
          <h1 className="heading-xl mt-8 lg:mt-0">Reservations</h1>
          <p className="mx-auto max-w-prose">
            We can’t wait to host you. If you have any special requirements please feel free to call
            on the phone number below. We’ll be happy to accommodate you.
          </p>
        </div>
        <ReservationForm className="mx-auto my-24 w-full max-w-[33.75rem] shadow-default sm:col-start-2 sm:col-end-12 lg:col-start-7 lg:col-end-13 lg:mt-0" />
      </div>
    </section>
  );
};

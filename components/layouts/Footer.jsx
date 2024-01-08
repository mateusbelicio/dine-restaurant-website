import Logo from '../ui/Logo';

export const Footer = () => {
  return (
    <footer className="text-footer bg-black-400 py-20 text-white md:py-[4.875rem] ">
      <div className="main-container main-grid gap-y-8">
        <div className="mb-2 sm:col-span-2">
          <Logo />
        </div>
        <address className="not-italic sm:col-start-5 sm:col-end-13 md:col-start-4 md:col-end-8">
          Marthwaite, Sedbergh <br /> Cumbria
          <a href="tel:+00441234567" className="block hover:underline focus-visible:underline">
            +00 44 123 4567
          </a>
        </address>
        <section className="sm:col-start-5 sm:col-end-13 md:col-start-8">
          <h2>Open times</h2>
          <ul>
            <li>MON - FRI: 09:00 AM - 10:00 PM</li>
            <li>SAT - SUN: 09:00 AM - 11:30 PM</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

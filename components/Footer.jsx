import Logo from './Logo';

export const Footer = () => {
  return (
    <footer className='bg-black-400 text-white text-footer py-20 md:py-[4.875rem] '>
      <div className='container gap-y-8'>
        <div className='sm:col-span-2 mb-2'>
          <Logo />
        </div>
        <address className='not-italic sm:col-start-5 sm:col-end-13 md:col-start-4 md:col-end-8'>
          Marthwaite, Sedbergh <br /> Cumbria
          <a href='tel:+00 44 123 4567' className='hover:underline focus-visible:underline block'>
            +00 44 123 4567
          </a>
        </address>
        <section className='sm:col-start-5 sm:col-end-13 md:col-start-8'>
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

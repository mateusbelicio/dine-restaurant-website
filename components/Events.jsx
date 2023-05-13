'use client';

import { useState } from 'react';
import Button from './Button';
import Link from 'next/link';

const tabs = ['Family Gathering', 'Special Events', 'Social Events'];

export const Events = () => {
  const [tab, setTab] = useState(1);
  const toggleTab = (t) => {
    setTab(t);
  };

  return (
    <section className='pt-20 pb-32'>
      <div className='container text-center md:text-left md:grid-rows-2'>
        <div className='bg-red-500 sm:col-span-full md:row-span-full md:col-span-6'>Slider</div>
        <div className='sm:col-span-full md:row-start-2 md:col-start-8 md:col-end-13 flex flex-col gap-4'>
          {tabs.map((t, index) => (
            <button
              className={`heading-sm hover:opacity-100 transition-colors duration-300 ${!(tab === index + 1 ? true : false) ? 'opacity-50' : ''}`}
              onclick={() => toggleTab(index + 1)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className='md:row-start-1 sm:col-span-full md:col-start-8 md:col-end-13'>
          <h2 className='heading-lg'>Family Gathering</h2>
          <p>
            We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable
            experience for all.
          </p>
          <Button as={Link} href='/booking' variant='lg black'>
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

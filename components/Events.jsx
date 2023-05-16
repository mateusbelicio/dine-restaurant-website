'use client';

import { useState } from 'react';
import Button from './Button';
import Link from 'next/link';
import ImageOptimized from './ImageOptimized';

const events = [
  {
    description:
      'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
    imagePath: 'homepage/family-gathering',
    imageAlt: 'ALT TODO',
    id: 1,
    name: 'Family Gathering',
  },
  {
    description:
      'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
    imagePath: 'homepage/special-events',
    imageAlt: 'ALT TODO',
    id: 2,
    name: 'Special Events',
  },
  {
    description:
      'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
    imagePath: 'homepage/social-events',
    imageAlt: 'ALT TODO',
    id: 3,
    name: 'Social Events',
  },
];

export const Events = () => {
  const [activeTab, setActiveTab] = useState(events[0]);

  return (
    <section className='pt-20 pb-32 sm:py-[7.5rem] md:py-40 pattern-curve-tr sm:before:top-0 sm:before:right-[51%] md:before:right-[62%]'>
      <div className='container text-center gap-y-7 sm:gap-y-12 md:gap-y-20 md:text-left md:grid-rows-[1fr_auto]'>
        <ImageOptimized
          path={activeTab.imagePath}
          type={'jpg'}
          alt={activeTab.imageAlt}
          classImage='w-full h-full object-cover'
          className='sm:col-start-2 sm:col-end-12 md:row-span-full md:col-span-6 mb-5 sm:mb-2 md:mb-0 shadow-default pattern-lines before:-top-[2.375rem] before:-left-10 before:z-10'
        ></ImageOptimized>
        <div className='sm:col-span-full md:row-start-2 md:col-start-8 md:col-end-13 flex flex-col sm:flex-row md:flex-col md:mb-[3.875rem] sm:justify-between gap-y-4 sm:gap-x-2'>
          {events.map((event) => (
            <button
              key={event.id}
              className={`heading-sm md:text-left flex-grow hover:opacity-100 transition-colors duration-300 ${
                !(activeTab.id === event.id) ? 'opacity-50' : 'tab-active'
              }`}
              onClick={() => setActiveTab(event)}
            >
              {event.name}
            </button>
          ))}
        </div>
        <div className='flex flex-col items-center md:items-start gap-y-3 sm:gap-y-5 md:row-start-1 sm:col-start-3 sm:col-end-11 md:col-start-8 md:col-end-13 md:self-end'>
          <h2 className='heading-lg'>{activeTab.name}</h2>
          <p className='mb-4 sm:mb-10'>{activeTab.description}</p>
          <Button as={Link} href='/booking' variant='lg black'>
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

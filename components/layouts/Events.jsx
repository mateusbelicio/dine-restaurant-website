'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '../ui/Button';
import Link from 'next/link';
import ImageOptimized from '../ImageOptimized';

import { allEvents } from '@content/events';

export const EventsSection = () => {
  const [activeTab, setActiveTab] = useState(allEvents[0]);

  return (
    <section className="pattern-curve-tr pb-32 pt-20 sm:py-[7.5rem] sm:before:right-[51%] sm:before:top-0 md:py-40 md:before:right-[62%]">
      <div className="main-container main-grid gap-y-7 text-center sm:gap-y-12 md:grid-rows-[1fr_auto] md:gap-y-20 md:text-left">
        <ImageOptimized
          path={activeTab.imagePath}
          type={'jpg'}
          alt={activeTab.imageAlt}
          classImage="w-full h-full object-cover"
          className="pattern-lines mb-5 shadow-default before:-left-10 before:-top-[2.375rem] before:z-10 sm:col-start-2 sm:col-end-12 sm:mb-2 md:col-span-6 md:row-span-full md:mb-0"
        ></ImageOptimized>
        <div className="flex flex-col gap-y-4 sm:col-span-full sm:flex-row sm:justify-between sm:gap-x-2 md:col-start-8 md:col-end-13 md:row-start-2 md:mb-[3.875rem] md:flex-col">
          {allEvents.map((event) => (
            <button
              key={event.id}
              className={twMerge('heading-sm flex-grow transition-colors duration-300 hover:opacity-100 md:text-left', !(activeTab.id === event.id) ?  'opacity-50' : 'tab-active')}
              onClick={() => setActiveTab(event)}
            >
              {event.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center gap-y-3 sm:col-start-3 sm:col-end-11 sm:gap-y-5 md:col-start-8 md:col-end-13 md:row-start-1 md:items-start md:self-end">
          <h2 className="heading-lg">{activeTab.name}</h2>
          <p className="mb-4 sm:mb-10">{activeTab.description}</p>
          <Button as={Link} href="/booking" variant="black" size="large">
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

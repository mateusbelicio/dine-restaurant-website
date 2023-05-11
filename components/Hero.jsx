'use client';

import Link from 'next/link';
import Button from './Button';
import Logo from './Logo';
import ImageOptimized from './ImageOptimized';

export const Hero = () => {
  return (
    <section className='bg-black-400 mix-blend-normal pb-[9.5rem] md:pb-[12.375rem] md:pt-16 relative'>
      <ImageOptimized
        path='/homepage/hero-bg'
        type='jpg'
        alt='Hero image'
        className='max-h-56 sm:max-h-96 md:max-h-none md:h-full md:absolute md:top-0 w-full block overflow-hidden'
        classImage='mx-auto h-full object-cover object-center md:mr-0 md:object-right'
      />
      <div className='container text-white justify-items-center md:justify-items-start isolate'>
        <div className='text-center col-span-full mt-3 sm:mt-0 md:text-left md:col-span-6'>
          <Logo />
          <h1 className='heading-xl mt-9 mb-5 md:mt-[9.5625rem]'>
            Exquisite dining <br /> since 1989
          </h1>
          <p className='max-w-[50ch] md:max-w-[38ch] mb-12'>
            Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
          </p>
          <Button as={Link} href='/booking' variant='lg'>
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

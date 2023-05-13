import Link from 'next/link';
import Button from './Button';
import ImageOptimized from './ImageOptimized';

export const CallToAction = () => {
  return (
    <section className='pt-[5.25rem] pb-20 sm:pt-[4.5rem] sm:pb-16 md:py-[5.5rem] bg-secondary-400 text-white relative'>
      <div className='container text-center'>
        <ImageOptimized path='/homepage/ready-bg' type='jpg' className='absolute inset-0 z-0' classImage='h-full w-full object-cover' />
        <div className='sm:col-span-full flex flex-col md:flex-row md:justify-between items-center gap-y-5 sm:gap-y-6 isolate'>
          <h2 className='heading-lg'>Ready to make a reservation?</h2>
          <Button as={Link} href='/booking' variant='lg'>
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

import ImageOptimized from './ImageOptimized';
import Divider from './Divider';

export const About = () => {
  return (
    <section className='pb-24 md:pb-0 pattern-curve-tl pattern-curve-tr--after sm:after:top-24 md:after:top-[15.625rem] sm:after:right-1/2 md:after:right-auto md:after:left-0 sm:before:bottom-0 sm:before:left-[50%] md:before:right-0 md:before:left-auto'>
      <div className='container -mt-[4.375rem] md:-mb-20 isolate'>
        <h2 className='sr-only'>About</h2>
        <ul className='grid grid-cols-[inherit] justify-items-center gap-y-24 sm:gap-y-[7.5rem] gap-x-[inherit] col-span-full text-center md:text-left'>
          <li className='grid grid-cols-[inherit] items-center justify-items-center gap-y-12 gap-x-[inherit] col-span-full'>
            <ImageOptimized
              path='homepage/enjoyable-place'
              type='jpg'
              alt='Enjoyable place'
              className='shadow-default col-span-full sm:col-start-2 sm:col-end-12 md:col-start-1 md:col-end-7'
            />
            <div className='flex flex-col gap-3 sm:gap-7 col-span-full sm:col-start-3 sm:col-end-11 md:col-start-8 md:col-end-13'>
              <Divider className='mb-6 mx-auto md:ml-0' />
              <h3 className='heading-lg'>
                Enjoyable place <br /> for all the family
              </h3>
              <p>
                Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.
              </p>
            </div>
          </li>
          <li className='grid grid-cols-[inherit] items-center justify-items-center gap-y-12 gap-x-[inherit] col-span-full'>
            <ImageOptimized
              path='homepage/locally-sourced'
              type='jpg'
              alt='Locally sourced'
              className='shadow-default pattern-lines md:shadow-none col-span-full sm:col-start-2 sm:col-end-12 md:col-start-7 md:col-end-13 sm:before:z-10 sm:before:bottom-14 sm:before:-right-14 md:before:-right-[7.125rem] md:before:bottom-[50.27%]'
            />
            <div className='flex flex-col gap-3 sm:gap-7 col-span-full sm:col-start-3 sm:col-end-11 md:col-start-1 md:col-end-6 md:row-start-1'>
              <Divider className='mb-6 mx-auto md:ml-0' />
              <h3 className='heading-lg'>
                The most locally <br /> sourced food
              </h3>
              <p>
                All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable
                food.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

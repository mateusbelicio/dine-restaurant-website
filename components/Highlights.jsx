import Divider from './Divider';
import ImageOptimized from './ImageOptimized';

export const Highlights = () => {
  return (
    <section className='bg-black-400 text-center md:text-left text-white pt-[4.5rem] pb-24 sm:py-24 md:pt-[12.5rem] md:pb-[7.5rem]'>
      <div className='container gap-y-[5.25rem] sm:gap-y-14'>
        <div className='flex flex-col gap-y-3 sm:gap-y-7 items-center md:items-start col-span-full md:col-span-6'>
          <Divider className='mb-6' />
          <h2 className='heading-lg'>
            A few highlights from <br /> our menu
          </h2>
          <p className='max-w-[40ch]'>
            We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>

        <ul className='flex flex-col gap-y-6 text-center body-sm col-span-full sm:col-start-2 sm:col-end-12 sm:text-left md:col-start-7 md:col-end-13 md:mt-14'>
          <li className='flex flex-col sm:flex-row gap-y-9 items-center pb-[3.375rem] sm:pb-6 border-b border-white border-opacity-[0.15] sm:gap-x-[1.875rem]'>
            <ImageOptimized path='/homepage/salmon' type='jpg' className='flex-shrink-0' />
            <div className='flex flex-col gap-y-1 flex-grow'>
              <h3 className='heading-md'>Seared Salmon Fillet</h3>
              <p className='max-w-[35ch]'>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
            </div>
          </li>
          <li className='flex flex-col sm:flex-row gap-y-9 items-center pb-[3.375rem] sm:pb-6 border-b border-white border-opacity-[0.15] sm:gap-x-[1.875rem]'>
            <ImageOptimized path='/homepage/beef' type='jpg' className='flex-shrink-0' />
            <div className='flex flex-col gap-y-1 flex-grow'>
              <h3 className='heading-md'>Rosemary Filet Mignon</h3>
              <p className='max-w-[35ch]'>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
            </div>
          </li>
          <li className='flex flex-col sm:flex-row gap-y-9 items-center sm:gap-x-[1.875rem]'>
            <ImageOptimized path='/homepage/chocolate' type='jpg' className='flex-shrink-0' />
            <div className='flex flex-col gap-y-1 flex-grow'>
              <h3 className='heading-md'>Summer Fruit Chocolate Mousse</h3>
              <p className='max-w-[35ch]'>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

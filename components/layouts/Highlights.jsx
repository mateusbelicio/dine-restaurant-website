import Divider from '../ui/Divider';
import ImageOptimized from '../ImageOptimized';

export const HighlightsSection = () => {
  return (
    <section className="bg-black-400 pb-24 pt-[4.5rem] text-center text-white sm:py-24 md:pb-[7.5rem] md:pt-[12.5rem] md:text-left">
      <div className="main-container main-grid gap-y-[5.25rem] sm:gap-y-14">
        <div className="col-span-full flex flex-col items-center gap-y-3 sm:gap-y-7 md:col-span-6 md:items-start">
          <Divider className="mb-6" />
          <h2 className="heading-lg">
            A few highlights from <br /> our menu
          </h2>
          <p className="max-w-[27.8125rem]">
            We cater for all dietary requirements, but here’s a glimpse at some of our diner’s
            favourites. Our menu is revamped every season.
          </p>
        </div>

        <ul className="body-sm col-span-full flex flex-col gap-y-6 text-center sm:col-start-2 sm:col-end-12 sm:text-left md:col-start-7 md:col-end-13 md:mt-14">
          <li className="flex flex-col items-center gap-y-9 border-b border-white border-opacity-[0.15] pb-[3.375rem] sm:flex-row sm:gap-x-[3.875rem] sm:pb-6 ">
            <ImageOptimized
              path="/homepage/salmon"
              type="jpg"
              className='relative min-w-min sm:after:absolute sm:after:left-full sm:after:top-[1.125rem] sm:after:inline-block sm:after:h-[1px] sm:after:w-8 sm:after:bg-primary-400 sm:after:content-[""] '
            />
            <div className="flex flex-grow flex-col gap-y-1">
              <h3 className="heading-md">Seared Salmon Fillet</h3>
              <p className="max-w-[35ch] sm:max-w-none">
                Our locally sourced salmon served with a refreshing buckwheat summer salad.
              </p>
            </div>
          </li>
          <li className="flex flex-col items-center gap-y-9 border-b border-white border-opacity-[0.15] pb-[3.375rem] sm:flex-row sm:gap-x-[3.875rem] sm:pb-6 ">
            <ImageOptimized
              path="/homepage/beef"
              type="jpg"
              className='relative min-w-min sm:after:absolute sm:after:left-full sm:after:top-[1.125rem] sm:after:inline-block sm:after:h-[1px] sm:after:w-8 sm:after:bg-primary-400 sm:after:content-[""] '
            />
            <div className="flex flex-grow flex-col gap-y-1">
              <h3 className="heading-md">Rosemary Filet Mignon</h3>
              <p className="max-w-[35ch] sm:max-w-none">
                Our prime beef served to your taste with a delicious choice of seasonal sides.
              </p>
            </div>
          </li>
          <li className="flex flex-col items-center gap-y-9 sm:flex-row sm:gap-x-[3.875rem] ">
            <ImageOptimized
              path="/homepage/chocolate"
              type="jpg"
              className='relative min-w-min sm:after:absolute sm:after:left-full sm:after:top-[1.125rem] sm:after:inline-block sm:after:h-[1px] sm:after:w-8 sm:after:bg-primary-400 sm:after:content-[""] '
            />
            <div className="flex flex-grow flex-col gap-y-1">
              <h3 className="heading-md">Summer Fruit Chocolate Mousse</h3>
              <p className="max-w-[35ch] sm:max-w-none">
                Creamy mousse combined with summer fruits and dark chocolate shavings.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

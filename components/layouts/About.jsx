import { twMerge } from 'tailwind-merge';

import ImageOptimized from '../ImageOptimized';
import Divider from '../ui/Divider';

export const AboutSection = () => {
  return (
    <section className="pattern-curve-tl pattern-curve-tr--after pb-24 sm:before:bottom-0 sm:before:left-[50%] sm:after:right-1/2 sm:after:top-24 md:pb-0 md:before:left-auto md:before:right-0 md:after:left-0 md:after:right-auto md:after:top-[15.625rem]">
      <div className="main-container main-grid isolate -mt-[4.375rem] md:-mb-20">
        <h2 className="sr-only">About</h2>
        <ul className="col-span-full grid grid-cols-[inherit] justify-items-center gap-x-[inherit] gap-y-24 text-center sm:gap-y-[7.5rem] md:text-left">
          <AboutItem
            imagePath="homepage/enjoyable-place"
            imageAlt="Sheep grazing on a hillside next to a stream and a farm in the background."
            description="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
          >
            Enjoyable place <br /> for all the family
          </AboutItem>
          <AboutItem
            imagePath="homepage/locally-sourced"
            imageAlt="A chef preparing food on a plate."
            description="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
            className="pattern-lines sm:before:-right-14 sm:before:bottom-14 sm:before:z-10 md:shadow-none md:before:-right-[7.125rem] md:before:bottom-[50.27%]"
          >
            The most locally <br /> sourced food
          </AboutItem>
        </ul>
      </div>
    </section>
  );
};

const AboutItem = ({ imagePath, imageAlt, children, description, className }) => {
  return (
    <li className="group col-span-full grid grid-cols-[inherit] items-center justify-items-center gap-x-[inherit] gap-y-12">
      <ImageOptimized
        path={imagePath}
        type="jpg"
        alt={imageAlt}
        className={twMerge(
          'col-span-full shadow-default sm:col-start-2 sm:col-end-12 md:group-odd:col-start-1 md:group-odd:col-end-7 md:group-even:col-start-7 md:group-even:col-end-13',
          className
        )}
      />
      <div className="col-span-full flex flex-col gap-3 sm:col-start-3 sm:col-end-11 sm:gap-7 md:group-odd:col-start-8 md:group-odd:col-end-13 md:group-even:col-start-1 md:group-even:col-end-6 md:group-even:row-start-1">
        <Divider className="mx-auto mb-6 md:ml-0" />
        <h3 className="heading-lg">{children}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

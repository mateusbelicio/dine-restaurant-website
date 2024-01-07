import ImageOptimized from './ImageOptimized';
import Divider from './Divider';

export const About = () => {
  return (
    <section className="pattern-curve-tl pattern-curve-tr--after pb-24 sm:before:bottom-0 sm:before:left-[50%] sm:after:right-1/2 sm:after:top-24 md:pb-0 md:before:left-auto md:before:right-0 md:after:left-0 md:after:right-auto md:after:top-[15.625rem]">
      <div className="main-container main-grid isolate -mt-[4.375rem] md:-mb-20">
        <h2 className="sr-only">About</h2>
        <ul className="col-span-full grid grid-cols-[inherit] justify-items-center gap-x-[inherit] gap-y-24 text-center sm:gap-y-[7.5rem] md:text-left">
          <li className="col-span-full grid grid-cols-[inherit] items-center justify-items-center gap-x-[inherit] gap-y-12">
            <ImageOptimized
              path="homepage/enjoyable-place"
              type="jpg"
              alt="Enjoyable place"
              className="col-span-full shadow-default sm:col-start-2 sm:col-end-12 md:col-start-1 md:col-end-7"
            />
            <div className="col-span-full flex flex-col gap-3 sm:col-start-3 sm:col-end-11 sm:gap-7 md:col-start-8 md:col-end-13">
              <Divider className="mx-auto mb-6 md:ml-0" />
              <h3 className="heading-lg">
                Enjoyable place <br /> for all the family
              </h3>
              <p>
                Our relaxed surroundings make dining with us a great experience for everyone. We can
                even arrange a tour of the farm before your meal.
              </p>
            </div>
          </li>
          <li className="col-span-full grid grid-cols-[inherit] items-center justify-items-center gap-x-[inherit] gap-y-12">
            <ImageOptimized
              path="homepage/locally-sourced"
              type="jpg"
              alt="Locally sourced"
              className="pattern-lines col-span-full shadow-default sm:col-start-2 sm:col-end-12 sm:before:-right-14 sm:before:bottom-14 sm:before:z-10 md:col-start-7 md:col-end-13 md:shadow-none md:before:-right-[7.125rem] md:before:bottom-[50.27%]"
            />
            <div className="col-span-full flex flex-col gap-3 sm:col-start-3 sm:col-end-11 sm:gap-7 md:col-start-1 md:col-end-6 md:row-start-1">
              <Divider className="mx-auto mb-6 md:ml-0" />
              <h3 className="heading-lg">
                The most locally <br /> sourced food
              </h3>
              <p>
                All our ingredients come directly from our farm or local fishery. So you can be sure
                that you’re eating the freshest, most sustainable food.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

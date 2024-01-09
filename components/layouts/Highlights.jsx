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
          <HighlightItem
            imagePath="/homepage/salmon"
            imageAlt="A seared salmon fillet on a plate with buckwheat summer salad."
            description="Our locally sourced salmon served with a refreshing buckwheat summer salad."
          >
            Seared Salmon Fillet
          </HighlightItem>
          <HighlightItem
            imagePath="/homepage/beef"
            imageAlt="A steak on a plate with rosemary sprigs."
            description="Our prime beef served to your taste with a delicious choice of seasonal sides."
          >
            Rosemary Filet Mignon
          </HighlightItem>
          <HighlightItem
            imagePath="/homepage/chocolate"
            imageAlt="Two cups of chocolate mousse with pomegranate."
            description="Creamy mousse combined with summer fruits and dark chocolate shavings."
          >
            Summer Fruit Chocolate Mousse
          </HighlightItem>
        </ul>
      </div>
    </section>
  );
};

const HighlightItem = ({ imagePath, imageAlt, description, children }) => {
  return (
    <li className="flex flex-col items-center gap-y-9 sm:flex-row sm:gap-x-[3.875rem] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-white [&:not(:last-child)]:border-opacity-[0.15] [&:not(:last-child)]:pb-[3.375rem] [&:not(:last-child)]:sm:pb-6">
      <ImageOptimized
        path={imagePath}
        alt={imageAlt}
        type="jpg"
        className="relative min-w-min sm:after:absolute sm:after:left-full sm:after:top-[1.125rem] sm:after:inline-block sm:after:h-[1px] sm:after:w-8 sm:after:bg-primary-400 sm:after:content-['']"
      />
      <div className="flex flex-grow flex-col gap-y-1">
        <h3 className="heading-md">{children}</h3>
        <p className="max-w-[35ch] sm:max-w-none">{description}</p>
      </div>
    </li>
  );
};

import Link from 'next/link';
import Button from '../ui/Button';
import ImageOptimized from '../ImageOptimized';

export const CallToActionSection = () => {
  return (
    <section className="relative bg-secondary-400 pb-20 pt-[5.25rem] text-white sm:pb-16 sm:pt-[4.5rem] md:py-[5.5rem]">
      <div className="main-container main-grid text-center">
        <ImageOptimized
          path="/homepage/ready-bg"
          type="jpg"
          className="absolute inset-0 z-0"
          classImage="h-full w-full object-cover"
        />
        <div className="isolate flex flex-col items-center gap-y-5 sm:col-span-full sm:gap-y-6 md:flex-row md:justify-between">
          <h2 className="heading-lg">Ready to make a reservation?</h2>
          <Button as={Link} href="/booking" size="large">
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

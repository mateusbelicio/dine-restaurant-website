import Link from 'next/link';
import Button from './ui/Button';
import Logo from './Logo';
import ImageOptimized from './ImageOptimized';

export const Hero = () => {
  return (
    <section className="relative bg-black-400 pb-[9.5rem] mix-blend-normal md:pb-[12.375rem] md:pt-16">
      <ImageOptimized
        path="/homepage/hero-bg"
        type="jpg"
        alt="Hero image"
        className="block max-h-56 w-full overflow-hidden sm:max-h-96 md:absolute md:top-0 md:h-full md:max-h-none"
        classImage="mx-auto h-full object-cover object-center md:mr-0 md:object-right"
      />
      <div className="main-container main-grid isolate justify-items-center text-white md:justify-items-start">
        <div className="col-span-full mt-3 text-center sm:mt-0 md:col-span-6 md:text-left">
          <Logo />
          <h1 className="heading-xl mb-5 mt-9 md:mt-[9.5625rem]">
            Exquisite dining <br /> since 1989
          </h1>
          <p className="mb-12 max-w-[50ch] md:max-w-[38ch]">
            Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce
            from the comfort of our farmhouse.
          </p>
          <Button as={Link} href="/booking" size="large">
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

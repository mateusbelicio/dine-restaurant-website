import { Hero } from '@components/Hero';
import { About } from '@components/About';
import { Highlights } from '@components/Highlights';
import { Events } from '@components/Events';
import { CallToAction } from '@components/CallToAction';

export default () => {
  return (
    <>
      <Hero />
      <About />
      <Highlights />
      <Events />
      <CallToAction />
    </>
  );
};

import { Hero } from '@components/Hero';
import { Features } from '@components/Features';
import { Highlights } from '@components/Highlights';
import { Events } from '@components/Events';
import { CallToAction } from '@components/CallToAction';

export default () => {
  return (
    <>
      <Hero />
      <Features />
      <Highlights />
      <Events />
      <CallToAction />
    </>
  );
};

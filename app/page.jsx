import { HeroSection } from '@components/layouts/Hero';
import { AboutSection } from '@components/layouts/About';
import { HighlightsSection } from '@components/layouts/Highlights';
import { EventsSection } from '@components/layouts/Events';
import { CallToActionSection } from '@components/layouts/CallToAction';

export default () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <EventsSection />
      <CallToActionSection />
    </>
  );
};

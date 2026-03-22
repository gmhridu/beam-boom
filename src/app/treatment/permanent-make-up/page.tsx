import Banner from "./_components/banner";
import About from "./_components/about";
import Procedure from "./_components/procedure";
import Consultation from "./_components/consultation";
import OurPrices from "./_components/our-prices";
import RemovalSlider from './_components/removal-slider';

export default function PermanentMakeUpPage() {
  return (
    <main>
      <Banner />
      <About />
      <Procedure />
      <RemovalSlider />
      <Consultation />
      <OurPrices />
    </main>
  );
}

import About from "./_components/about";
import Banner from "./_components/banner";
import Consultation from "./_components/consultation";
import OurPrices from "./_components/our-prices";
import Procedure from "./_components/procedure";
import RemovalSlider from "./_components/removal-slider";

export default function Co2FractionalLeaserPage() {
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

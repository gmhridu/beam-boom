import About from "./_components/about";
import Banner from "./_components/banner";
import BookConsultation from "./_components/book-consultation";
import OurPrices from "./_components/our-prices";
import SkinConditions from "./_components/skin-conditions";
import Treatments from "./_components/treatments";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Banner />
      <About />
      <Treatments />
      <BookConsultation />
      <SkinConditions />
      <OurPrices />
      {/* <ShopNow /> */}
      {/* <AsSeenIn /> */}
    </main>
  );
}

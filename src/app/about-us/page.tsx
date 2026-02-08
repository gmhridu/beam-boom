import Banner from "@/app/about-us/_components/banner";
import About from "./_components/about";
import MeetTheTeam from "./_components/meet-the-team";
import GallerySection from "./_components/gallery-section";
import AsSeenIn from "./_components/as-seen-as";

export default function AboutUsPage() {
  return (
    <main>
      <Banner />
      <About />
      <MeetTheTeam />
      <GallerySection />
      <AsSeenIn />
    </main>
  );
}

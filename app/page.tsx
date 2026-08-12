import HomePageHeroSection from "@/components/modules/HomePage/Hero";
import GridWrapperComponent from "@/components/modules/HomePage/Products";

// HOME PAGE
export default function Home() {
  return (
    <div className="main__container">
      <HomePageHeroSection />
      <GridWrapperComponent title="Categories" />
      <GridWrapperComponent title="Freqeuntly Added Products" />
    </div>
  );
}

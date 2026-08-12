import HomePageHeroSection from "@/components/modules/HomePage/Hero";
import GridWrapperComponent from "@/components/modules/HomePage/Products";

// HOME PAGE
export default function Home() {
  return (
    <div className="main__container">
      <HomePageHeroSection />
      <GridWrapperComponent id="CATEGORIES" title="Categories" />
      <GridWrapperComponent id="FREQUENTLY_ADDED" title="Freqeuntly Added Products" />
    </div>
  );
}

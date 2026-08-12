//^ HOME PAGE
import HomePageHeroSection from "@/components/modules/HomePage/Hero";
import GridWrapperComponent from "@/components/modules/HomePage/Products";

export default function HomePage() {
  return (
    <div className="main__container">
      <HomePageHeroSection />
      <GridWrapperComponent link="/" id="CATEGORIES" title="Categories" />
      <GridWrapperComponent link="/products" id="FREQUENTLY_ADDED" title="Freqeuntly Added Products" />
    </div>
  );
}

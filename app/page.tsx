import HomePageHeroSection from "@/components/modules/HomePage/Hero";
import ProductsWrapperComponent from "@/components/modules/HomePage/Products";

// HOME PAGE
export default function Home() {
  return (
    <div className="main__container">
      <HomePageHeroSection />
      <ProductsWrapperComponent />
    </div>
  );
}

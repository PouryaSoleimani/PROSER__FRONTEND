import HomePageCarouselComponent from "@/components/modules/HomePage/Carousel";
import ProductsWrapperComponent from "@/components/modules/HomePage/Products";

// HOME PAGE
export default function Home() {
  return (
    <div className="main__container">
      <div className="container mx-auto ">
        <HomePageCarouselComponent />
        <ProductsWrapperComponent />
      </div>
    </div>
  );
}

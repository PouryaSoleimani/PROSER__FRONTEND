import SingleProductCardComponent from "../SingleProduct";

const ProductsWrapperComponent = () => {
  return (
    <section className="grided-container">
      <h3 id="products__h3" className="pt-40 pb-20 grid place-items-center text-4xl">
        RECENTLY FEATURED PRODUCTS
      </h3>
      <div className="w-full ring-0 border-0 rounded-none min-h-400 grid grid-cols-4 place-content-center justify-center gap-8 p-8">
        {Array.from({ length: 10 }).map((item, index) => (
          <SingleProductCardComponent key={index + 1} title="adsd" src="" price={0} id={index + 1} />
        ))}
      </div>
    </section>
  );
};

export default ProductsWrapperComponent;

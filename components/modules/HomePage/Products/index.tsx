import SingleProductCardComponent from "../SingleProduct";

type GridWrapperComponentPropsType = {
  title: string,
  dataArray?: { [key: string]: string | number }[]
}

const GridWrapperComponent = ({ title }: GridWrapperComponentPropsType) => {
  return (
    <section className="grided-container">
      <h3 id="products__h3" className="blackops pt-30 grid place-items-center text-4xl underline font-medium">
        {title}
      </h3>
      <div className="w-full ring-0 border-0 rounded-none min-h-400 grid grid-cols-4 place-content-center justify-center gap-8 p-24">
        {Array.from({ length: 12 }).map((item, index) => (
          <SingleProductCardComponent key={index + 1} title="adsd" src="/GUNS/M_4.png" price={0} id={index + 1} />
        ))}
      </div>
    </section>
  );
};

export default GridWrapperComponent;

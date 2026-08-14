import Link from "next/link";
import SingleProductCardComponent from "../SingleProduct";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr";

type GridWrapperComponentPropsType = {
  title: string;
  id?: string;
  dataArray?: { [key: string]: string | number }[];
  link: string;
};

const GridWrapperComponent = ({ title, id, link }: GridWrapperComponentPropsType) => {
  return (
    <section id={id} className="grided-container smt-40">
      <h3 id="products__h3" className="blackops pt-30 grid place-items-center text-4xl underline font-medium">
        {title}
      </h3>
      <div className="grid-cols-1  sm:grid-cols-2 md:grid-cols-3  w-full ring-0 border-0 rounded-none min-h-400 grid xl:grid-cols-4 place-content-center justify-center gap-8 p-8 lg:p-16 xl:p-24">
        {Array.from({ length: 12 }).map((item, index) => (
          <SingleProductCardComponent key={index + 1} title="adsd" src="/GUNS/DESERT_EAGLE.png" price={0} id={index + 1} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link className="bg-foreground flex items-center gap-2 -translate-y-10 text-background px-4 py-2 outline-8 outline-accent" href={link}>
          SEE MORE
          <PlusIcon weight="bold" className="size-5 -translate-y-px" />
        </Link>
      </div>
    </section>
  );
};

export default GridWrapperComponent;

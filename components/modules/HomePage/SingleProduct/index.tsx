import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BasketIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

type SingleProductCardPropsType = {
  src: string;
  title: string;
  price: string | number;
  id: number;
};
const SingleProductCardComponent = ({ src, title, price, id }: SingleProductCardPropsType) => {
  return (
    <Card className="relative cursor-pointer overflow-hidden group border-0 ring-0 hover:outline-accent transition-all duration-300 ease-in-out hover:scale-[1.01]  outline-8 outline-outline mx-auto w-full max-w-sm pt-0 rounded-none">
      <Image src={src} width={500} height={500} alt="" className="transition-all w-full h-full rounded-none scale-[1.025] duration-300  ease-in-out object-cover object-center overflow-hidden border-white bg-black ring-0 outline-0" />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>A practical talk on component APIs, accessibility, and shipping faster.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full justify-between h-11 border-2 rounded-none">
          Add to Cart <BasketIcon className="size-6" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SingleProductCardComponent;

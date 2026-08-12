import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BasketIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

type SingleProductCardPropsType = {
  src: string;
  title: string;
  desc?: string;
  price: string | number;
  id: number;
  badge?: string
};

const SingleProductCardComponent = ({ src, title, price, id, badge }: SingleProductCardPropsType) => {
  return (
    <Card className="relative select-none cursor-pointer overflow-hidden group border-0 ring-0 hover:outline-accent transition-all duration-300 ease-in-out hover:scale-[1.01]  outline-8 outline-outline mx-auto w-full max-w-sm pt-0 rounded-none">
      <Image src={src} width={500} height={500} alt="" draggable="false" className="transition-all w-full h-full rounded-none scale-[1.05] duration-300  ease-in-out object-cover object-center overflow-hidden border-white bg-black ring-0 outline-0" />
      <CardHeader>
        <CardAction>
          <Badge variant="outline" className="h-6">Available</Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>A practical talk on component APIs, accessibility, and shipping faster.</CardDescription>
      </CardHeader>
      <code className="w-full text-2xl font-semibold flex justify-end px-4">$300</code>
      <CardFooter>
        <Button className="w-full justify-between h-11 border-2 rounded-none text-[14px]">
          ADD TO CART <BasketIcon className="size-6" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SingleProductCardComponent;

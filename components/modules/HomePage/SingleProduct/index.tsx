'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BasketIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { toast } from "sonner";

type SingleProductCardPropsType = {
  src: string;
  title: string;
  desc?: string;
  price: string | number;
  id: number;
  badge?: string;
}


const SingleProductCardComponent = ({ src, title, price, id, badge }: SingleProductCardPropsType) => {


  const buyProductHandler = (id: number | string) => {
    toast.success('Item Added To Cart')
  }

  return (
    <Card className="relative select-none cursor-pointer overflow-hidden group border-0 ring-0 hover:outline-accent transition-transform duration-300 ease-in-out hover:scale-[1.01]  outline-8 outline-outline mx-auto w-full max-w-sm pt-0 rounded-none">
      <Image
        src={src}
        width={500}
        height={500}
        alt=""
        draggable="false"
        className="transition-transform w-full h-full rounded-none scale-[1.05] duration-300  ease-in-out object-cover object-center overflow-hidden border-white bg-black ring-0 outline-0"
      />
      <CardHeader>
        <CardAction className="flex flex-col gap-1.5">
          <Badge variant="outline" className="h-6 text-[11px] bg-success w-full"> Available </Badge>
          <Badge variant="outline" className="h-6 text-[11px] w-full"> Pistols </Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>A practical talk on component APIs, accessibility, and shipping faster.</CardDescription>
      </CardHeader>
      <code className="w-full text-2xl font-semibold flex justify-end px-4">$300</code>
      <CardFooter>
        <Button onClick={() => buyProductHandler(id)} className="w-full justify-between h-11 border-2 rounded-none text-[14px]">
          ADD TO CART <BasketIcon className="size-6" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SingleProductCardComponent;

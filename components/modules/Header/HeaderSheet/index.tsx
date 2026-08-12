import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BrowserIcon, CoinIcon, CompassIcon, HouseIcon, InfoIcon, ListIcon, PhoneIcon, SealQuestionIcon, TruckIcon } from "@phosphor-icons/react/dist/ssr"



const HeaderSheetComponent = () => {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="ghost"><ListIcon size={32} className="size-6" /></Button>} />
      <SheetContent>
        <SheetHeader className="border-b-4">
          <SheetTitle>Navigation List</SheetTitle>
        </SheetHeader>
        <ul className="px-6 flex flex-col py-8 *:cursor-pointer *:hover:bg-accent *:px-4 *:py-4 *:flex *:items-center *:justify-between list-disc">
          <li> Home <HouseIcon weight="fill" className="size-4" /> </li>
          <li> Categories <ListIcon weight="bold" className="size-4" /> </li>
          <li>About Us <InfoIcon weight="fill" className="size-4" /></li>
          <li>Become A Seller <CoinIcon weight="fill" className="size-4" /></li>
          <li>Orders <TruckIcon weight="fill" className="size-4" /></li>
          <li>Panel <BrowserIcon weight="fill" className="size-4" /></li>
          <li>Contact Us <PhoneIcon weight="fill" className="size-4" /></li>
          <li>FAQ <SealQuestionIcon weight="fill" className="size-4" /></li>
          <li>Nearby Stores <CompassIcon weight="fill" className="size-4" /></li>
        </ul>

      </SheetContent>
    </Sheet>
  )
}

export default HeaderSheetComponent
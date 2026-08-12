import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ListIcon } from "@phosphor-icons/react/dist/ssr"



const HeaderSheetComponent = () => {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="ghost"><ListIcon size={32} className="size-6" /></Button>} />
      <SheetContent>
        <SheetHeader className="border-b-4">
          <SheetTitle>Navigation List</SheetTitle>
        </SheetHeader>
        <ul className="px-6 flex flex-col gap-8 py-8 *:cursor-pointer *:hover:underline *:underline-offset-2 *:decoration-2 list-disc">
          <li>Home</li>
          <li>Categories</li>
          <li>About Us</li>
          <li>Become A Seller</li>
          <li>Orders</li>
          <li>Panel</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

      </SheetContent>
    </Sheet>
  )
}

export default HeaderSheetComponent
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CurrencyDollarIcon, LinkIcon, BasketIcon, TrashIcon } from "@phosphor-icons/react/dist/ssr"

const HeaderBasketComponent = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" />}>
        <BasketIcon className="size-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={'w-fit p-4 mt-3 rounded-sm outline-6 outline-outline'}>
        <DropdownMenuGroup className={'pb-2'}>
          Your Shopping Basket
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className={'py-2'}>
          ITEMS HERE
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className={'pt-2 grid grid-cols-3 gap-2'}>
          <Button variant={'white'}><CurrencyDollarIcon /> Pay</Button>
          <Button variant={'default'}><LinkIcon /> Basket Page</Button>
          <Button variant={'destructive'}><TrashIcon /> Remove All</Button>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HeaderBasketComponent
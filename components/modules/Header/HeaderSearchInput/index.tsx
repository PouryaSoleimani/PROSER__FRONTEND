import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"



const HeaderSearchInputComponent = () => {
  return (
    <Field>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." className="bg-black/30 rounded-none" />
        <Button variant="default">Search</Button>
      </ButtonGroup>
    </Field>
  )
}

export default HeaderSearchInputComponent
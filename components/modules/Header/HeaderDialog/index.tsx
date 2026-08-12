import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FieldGroup, Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type HeaderDialogPropsType = {
  mode: "LOGIN" | "SIGNUP";
};

const HeaderDialog = ({ mode }: HeaderDialogPropsType) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger render={<Button variant={mode == "LOGIN" ? "outline" : "default"}>{mode == "LOGIN" ? "Login" : "SignUp"}</Button>} />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>{mode == "LOGIN" ? "WELCOME BACK 🎉" : "JOIN US NOW ❤"}</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Username | Phone-number</Label>
              <Input id="name-1" name="username" autoComplete="name" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Password</Label>
              <Input id="username-1" name="username" type="password" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">{mode == "LOGIN" ? "Login" : "SignUp"}</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default HeaderDialog;

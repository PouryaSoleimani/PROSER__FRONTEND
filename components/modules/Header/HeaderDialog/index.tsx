'use client'
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FieldGroup, Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import axios from 'axios'
import { toast } from "sonner";
import { Clicker_Script } from "next/font/google";

type HeaderDialogPropsType = {
  mode: "LOGIN" | "SIGNUP";
};

const HeaderDialog = ({ mode }: HeaderDialogPropsType) => {
  console.log({ mode })
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const close = useRef(null)

  const loginHandler = async () => {
    const body = {
      username,
      password
    }
    const data = (await axios.post('http://localhost:8000/users/create', body)).data
    if (data.ok) {
      toast.success('You Logged In Successfully')
      console.log({ close })
      if (close) {
        close.current!.click()
      }
    } else {
      toast.error('Unknown Error')
    }
  }

  const signUpHandler = () => {

  }


  return (
    <Dialog>
      <form>
        <DialogTrigger render={<Button variant={mode == "LOGIN" ? "outline" : "default"}>{mode == "LOGIN" ? "Login" : "SignUp"}</Button>} />
        <DialogContent className="sm:max-w-sm ring-0">
          <DialogHeader>
            <DialogTitle>{mode == "LOGIN" ? "WELCOME BACK 🎉" : "JOIN US NOW ❤"}</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Username | Phone-number</Label>
              <Input value={username} onChange={(e) => setUsername(e.target.value)} id="name-1" name="username" autoComplete="name" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Password</Label>
              <Input value={password} onChange={e => setPassword(e.target.value)} id="username-1" name="username" type="password" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose ref={close} render={<Button variant="outline">Cancel</Button>} />
            <Button type="button" onClick={mode == 'LOGIN' ? loginHandler : signUpHandler}>{mode == "LOGIN" ? "Login" : "SignUp"}</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default HeaderDialog;

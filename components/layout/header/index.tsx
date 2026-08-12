import Image from "next/image";
import LOGO from "@/public/logo.png";
import { Button } from "@/components/ui/button";

const HeaderComponent = () => {
  return (
    <div className="bg-accent grid grid-cols-2 items-center justify-between w-full px-16">
      <div className="flex gap-4 items-center" id="LOGO">
        <Image
          src={LOGO}
          width={30}
          height={300}
          alt="logo"
          className="-translate-y-0.5"
        />
        <h2 className="text-3xl m-0">PROSER</h2>
      </div>
      <div className="flex gap-2 justify-self-end">
        <Button variant="outline">Login</Button>
        <Button variant="default">SignUp</Button>
      </div>
    </div>
  );
};

export default HeaderComponent;

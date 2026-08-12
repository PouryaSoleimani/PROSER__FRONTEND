import Image from "next/image";
import LOGO from "@/public/logo.png";
import HeaderDialog from "@/components/modules/HeaderDialog";

const HeaderComponent = () => {
  return (
    <div className="bg-accent grid grid-cols-2 items-center justify-between w-full px-16">
      <div className="flex gap-4 items-center" id="LOGO">
        <Image src={LOGO} width={30} alt="logo" className="-translate-y-0.5" />
        <h2 className="text-3xl m-0 jetbrains font-semibold">PROSER</h2>
      </div>
      <div className="flex gap-2 justify-self-end">
        <HeaderDialog mode="LOGIN" />
        <HeaderDialog mode="SIGNUP" />
      </div>
    </div>
  );
};

export default HeaderComponent;

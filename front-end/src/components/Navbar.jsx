import NavbarImg from "@/Public/Navbar.svg";
import VectorImg from "@/Public/Vector.svg";
import ProfileImg from "@/Public/Placeholder.svg";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex w-[1200px] justify-between py-[16px] ">
      <div className="flex gap-6 justify-center items-center">
        <Image src={NavbarImg} width={40} height={40} />
        <div className="font-[600] text-[16px] text-center text-[#0f172a]">
          <Link href={"http://localhost:3000/Main"}>Dashbord</Link>
        </div>
        <div className="font-[600] text-[16px] text-center text-[#0f172a]">
          <Link href={"http://localhost:3000/Record"}>Records</Link>
        </div>
      </div>
      <div className="flex gap-6 justify-center items-center">
        <button className="w=[99px] gap-1 h-[32px] p-[8px] rounded-[20px] bg-[#0166ff] flex justify-center items-center text-[#ffffff] ">
          <Image src={VectorImg} width={15} height={15} />
          Record
        </button>
        <Image src={ProfileImg} width={40} height={40} />
      </div>
    </div>
  );
};

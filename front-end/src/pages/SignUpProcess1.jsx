import { Steps } from "@/components/Steps";
import { SignUpConfirm } from "@/components/SignUpConfirm";

export default function Home() {
  return (
    <div className="w-full bg-[#ffffff] relative ">
    <Steps/>
      <SignUpConfirm />
    </div>
  );
}
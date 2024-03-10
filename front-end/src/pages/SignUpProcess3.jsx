import ConfirmImg from "../Public/StepsImg/Confirm.svg";
import StepImg from "../Public/StepsImg/StepImg.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-[#ffffff] relative ">
      <div className="flex justify-center items-center">
        <div className="absolute  top-[40px]  flex items-center flex-col gap-[48px] ">
          <Image src={StepImg} width={107.65} height={40} />
          <ul className="steps gap-4">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step step-primary">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute top-[317px] gap-8 flex flex-col ">
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-col gap-8 items-center">
              <div className="flex gap-4 flex-col items-center font-[600] text-[24px] leading-8 text-[#0172a]">
                <Image src={ConfirmImg} width={48} height={48} />
                Good Job!
              </div>
            </div>
            <p className="w-[384px]  font-[400] text-[12px] leading-4 text-[#475569]">
              Your first account has been created .Now contine to dashboard and
              start tracking
            </p>
          </div>
          <button className="bg-[#0166ff] px-4 rounded-[20px] w-[384px] h-[48px] text-[#ffffff]">
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

import StepImg from "../Public/StepsImg/StepImg.svg";
import Image from "next/image";

export const Steps = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="absolute  top-[40px]  flex items-center flex-col gap-[48px] ">
        <Image src={StepImg}  alt="StepImg"  className="w-[107.65px] h-[40px]" />
        <ul className="steps gap-4">
          <li className="step step-primary">Currency</li>
          <li className="step ">Balance</li>
          <li className="step ">Finish</li>
        </ul>
      </div>
    </div>
  );
};

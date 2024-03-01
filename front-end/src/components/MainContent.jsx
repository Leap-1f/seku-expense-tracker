import { Charts } from "@/components/ui/Charts";
import { TransferStory } from "./ui/TransferStory";

import CardImg from "@/Public/MainContentImg/Noise.svg";
import LeadingIcon from "@/Public/MainContentImg/Leading icon.svg";
import Image from "next/image";

export const MainContent = () => {
  return (
    <div className="flex bg-[#E2E8F0] w-full  flex-col  ">
      <div className="flex w-[1200px] mx-auto gap-6 pt-8">
        <div>
          <Image src={CardImg} />
        </div>
        {/* card 1 */}
        <div className="bg-[#ffffff] rounded-[12px]  w-[384px] h-[208px]  ">
          <div className="font-[600] text-[16px] leading-6 w-[384px] flex  items-center border-b-[1px] border-gray-300 py-[16px] px-[24px] gap-2 ">
            <div className="w-2 h-2 bg-[#84cc16] rounded-[100px]"></div>Your
            Income
          </div>
          <div className="gap-6 flex flex-col py-[20px] px-[24px] ">
            <div className="gap-1 font-[600] text-[36px] leading-[40px] text-[#000000] ">
              1,200.000₮
              <p className="font-[400] text-[18px] leading-[28px] text-[#64748b]">
                Your Income Amount
              </p>
            </div>
            <div className="flex gap-2 text-[#000000] font-[400] text-[18px] leading-[28px] ">
              <Image src={LeadingIcon} />
              32% from last month
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="bg-[#ffffff]  rounded-[12px]  w-[384px] h-[208px]  ">
          <div className="font-[600] text-[16px] leading-6 w-[384px] flex  items-center border-b-[1px] border-gray-300 py-[16px] px-[24px] gap-2 ">
            <div className="w-2 h-2 bg-[#84cc16] rounded-[100px]"></div>Total
            Expenses
          </div>
          <div className="gap-6 flex flex-col py-[20px] px-[24px] ">
            <div className="gap-1 font-[600] text-[36px] leading-[40px] text-[#000000] ">
              1,200.000₮
              <p className="font-[400] text-[18px] leading-[28px] text-[#64748b]">
                Your Income Amount
              </p>
            </div>
            <div className="flex gap-2 text-[#000000] font-[400] text-[18px] leading-[28px] ">
              <Image src={LeadingIcon} />
              32% from last month
            </div>
          </div>
        </div>
      </div>
      <Charts />
      <TransferStory />
    </div>
  );
};

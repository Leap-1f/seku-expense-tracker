import HomeImg from "@/Public/MainContentImg/Group 8.svg";
import Image from "next/image";

export const TransferStory = () => {
  return (
    <div className="w-[1200px] my-8  rounded-[12px] pt-8 bg-[#ffffff] mx-auto">
      <div className="w-full py-4 px-6 gap-2 border-b-[1px] border-slate-200 ">
        Last Records
      </div>
      <div className="W-full px-6 ">
        <div className="border-b-[1px] border-[#FFFFFF] py-5 justify-between flex">
          <div className="flex gap-4">
            <Image src={HomeImg} width={40} height={40} />
            <div>
              <div className="font-[400] text-[16px] leading-[24px] text-[#000000]  ">
                Lending & Renting
              </div>
              <div className="font-[400] text-[12px] leading-[16px] text-[#6b7280]">3 hours ago</div>
            </div>
          </div>
          <div className="font-[600] text-[16px] leading-[24px] text-[#84cc16]">
            - 1,000₮
          </div>
        </div>
      </div>
    </div>
  );
};

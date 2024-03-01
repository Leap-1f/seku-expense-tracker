import VectorImg from "@/Public/Vector.svg";
import Image from "next/image";

export const LeftSection = () => {
  return (
    <div className="rounded-[24px] w-[282px] py-6 px-[16px] bg-[#F9FAFB] gap-6 flex flex-col ">
      <div className="flex flex-col gap-6 font-[600] text-[24px] leading-[32px] text-[#000000]">
        Records
        <button className="gap-1  w-[250px]   h-[32px] p-[8px] rounded-[20px] bg-[#0166ff] flex justify-center items-center text-[#ffffff] font-[400] text-[16px] leading-6">
          <Image src={VectorImg} alt="Record" width={15} height={15} />
          Add
        </button>
      </div>
      <input
        type="text "
        placeholder="Search"
        className="rounded-lg border-[1px] bg-[#d1d5db] h-[32px] w-[250px] text-[#000000] border-gray-200 "
      />
      <div className="flex flex-col gap-4 font-[600] text-[16px] leading-6 text-[#000000]  ">
        <div>Types</div>
        <div>
          <div className="p-[12px] flex ites-center gap-2">
            <div className="w-4 h-4 border-[1px] rounded-[100px] border-[#000000]"></div>
            All
          </div>
          <div className="p-[12px] flex ites-center gap-2">
            <div className="w-4 h-4 border-[1px] rounded-[100px] border-[#000000]"></div>
            Income
          </div>
          <div className="p-[12px] flex ites-center gap-2">
            <div className="w-4 h-4 border-[1px] rounded-[100px] border-[#000000]"></div>
            Expense
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4 ">
        <div className="flex justify-between">
          <div className="font-[600] text-[16px] justify-center flex items-center leading-6 text-[#000000]">
            Category
          </div>
          <button className="p-[12px] text-[#1f2937] font-[400] text-[16px] leading-6 opacity-[40%]">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

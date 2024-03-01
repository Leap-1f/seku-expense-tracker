import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

export const RightSection = () => {
    return <div className="ml-8 w-[894px] flex flex-col gap-4">
        <div className="w-full justify-between flex">
            <div className="flex gap-4 justify-center items-center">
                <div className="w-8 h-8 rounded-[8px] flex justify-center items-center bg-[#ffffff]">
                    <BsChevronCompactLeft />
                </div>
                <div className="font-[400]  text-[16px] leading-6 text-[#000000] flex justify-center items-center">
                    Last 30 Days
                </div>
                <div className="w-8 h-8 rounded-[8px] flex justify-center items-center bg-[#ffffff]">
                    <BsChevronCompactRight />
                </div>
            </div>
            <div className="border-[1px] border-[#F9FAFB] rounded-lg bg-[#D1D5DB] flex p-2">
                <div className="font-[600] text-center text-[16px] leading-6 text-[#1F2937] flex justify-center items-center">
                    Newest First
                </div>
                <button className="w-6 h-6 flex justify-center items-center"> <IoMdArrowDropdown /></button>
            </div>
        </div>
        <div className="w-full justify-between flex">
            <div className="ml-[10] flex gap-4">
                <div className="w-6 h-6 border-[1px] border-[#1F2937] rounded-[4px] opacity-[20%]"></div>
                <div className="font-[400]  text-[16px] leading-6 text-[#000000]">Select all</div>
            </div>
            <div className="font-[600] text-[16px] leading-6 text-[#94A3B8]">
                -35,500₮
            </div>
        </div>
        <div className="flex flex-col gap-3 w-full ">
            <div className="ont-[600] text-[16px] leading-6 text-[#000000] ">
                Today
            </div>
        </div>
    </div>
}
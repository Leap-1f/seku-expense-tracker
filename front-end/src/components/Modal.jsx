import DropDown from "@/Public/dropdown.svg";
import Image from "next/image";
import Cancel from "@/Public/Vector.png";

export const Modal = ({ open, onClose }) => {
    if (!open) {
        return null; // Corrected: using curly braces to enclose the JSX code block
    }

    return (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-25 flex justify-center items-center">
            <div className=" w-[792px] relative h-[512px] rounded-[12px] bg-[#E2E8F0]">
                <div className="w-full py-5 px-6 justify-between flex border-b-[1px] border-[#E2E8F0]">
                    <div className="font-[600] text-[20px] leading-[28px] text-[#0F172A]">
                        Add Record
                    </div>
                    <button onClick={onClose}>
                        <Image src={Cancel} width={15.76} height={15.76} />
                    </button>
                </div>
                <div className="flex w-full ">
                    <div className="flex w-full flex-col ">
                        <div className="py-5 px-6 gap-5 w-[50%]">
                            <div className="flex bg-[#f3f4f6] w-full gap-1 rounded-[100px] ">
                                <button className="w-[172px] bg-[#0166ff] px-3 py-1 text-[#f9fafb] font-[400] text-[16px] leading-[24px]  rounded-[20px] ">Expense</button>
                                <button className="w-[172px] bg-[#16A34A] px-3 py-1 text-[#f9fafb] font-[400] text-[16px] leading-[24px]  rounded-[20px] ">Income</button>
                            </div>
                        </div>
                        <div className="w-[50%] flex justify-center absolute left-0 bottom-2 items-center ">
                            <div className="flex flex-col gap-[32px]  w-[348px] ">
                                <div className="flex flex-col gap-[32px] w-full">
                                    <div className="bg-[#D1D5DB] border-[1px] border-[#f3f4f6] rounded-lg gap-2 py-3 px-4 flex">
                                        <div className="font-[400] text-[16px] leading-[24px] text-[#171717]">Amount</div>
                                        <div className="flex gap-2">
                                            <div className="font-[400] text-[20px] leading-[28px] text-[#9CA3AF]">₮</div>
                                            <div className="font-[400] text-[20px] leading-[28px] text-[#9CA3AF]">000.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    Category
                                </div>
                                <div className="border-[1px] border-[#F9FAFB] flex p-4 bg-[#D1D5DB] rounded-lg">
                                    <div className="w-[292px] font-[400] text-[16px] leading-[24px] text-[#94A3B8]">
                                        Choose
                                    </div>
                                    <button>
                                        <Image src={DropDown} width={24} height={24} />
                                    </button>
                                </div>
                                <div className="flex">
                                    <div className="flex  ">
                                        <div className="bg-[#d1d5db] border-[1px] border-[#F9FAFB] p-4 rounded-lg w-[168px] ">
                                            Oct 30,2023
                                        </div>
                                        <Image src={DropDown} width={24} height={24} />
                                    </div>
                                    <div className="flex ">
                                        <div className="bg-[#d1d5db] border-[1px] border-[#F9FAFB] p-4 rounded-lg w-[168px] ">
                                            Oct 30,2023
                                        </div>
                                        <Image src={DropDown} width={24} height={24} />
                                    </div>
                                </div>
                                <button className="bg-[#0166FF] px-3 py-1.5 rounded-[20px] w-full   text-[#F9FAFB]">
                                    Add Record
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] flex justify-center">
                        <div className="flex flex-col gap-[32px]  w-[348px]">
                            <div className="font-[400] text-[16px] leading-[24px] text-[#1F2937]">
                                Payee
                            </div>
                            <div className="border-[1px] border-[#F9FAFB] flex p-4 bg-[#D1D5DB] rounded-lg">
                                <div className="w-[292px] font-[400] text-[16px] leading-[24px] text-[#94A3B8]">
                                    Write here
                                </div>
                                <button>
                                    <Image src={DropDown} width={24} height={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


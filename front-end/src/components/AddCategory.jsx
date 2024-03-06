import Cancel from "@/Public/Vector.png";
import Image from "next/image";

export const AddCategory = ({ open, onClose }) => {
    if (!open) {
        return null;
    }
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-full bg-[#000000] bg-opacity-25 flex justify-center items-center">
                <div className="w-[494px]  rounded-[12px] bg-[#e2e8f0]">
                    <div className="w-full py-5 px-6 justify-between flex border-b-[1px] border-[#E2E8F0]">
                        <div className="font-[600] text-[20px] leading-[28px] text-[#0F172A]">
                            Add Record
                        </div>
                        <button onClick={onClose}>
                            <Image src={Cancel} width={15.76} height={15.76} />
                        </button>

                    </div>
                    <div className="w-full p-6 gap-5 flex justify-center items-center">
                        <div className="w-[446px] flex gap-[32px] flex-col ">
                            {/* <div className="w-full flex gap-3 ">
                                <div className="flex">

                                </div>
                            </div> */}
                            <button className="font-[400] text-[16px] leading-[24px] text-[#f9fafb]  w-full rounded-[20px] px-[12px] py-1 bg-[#16A34A] ">
                                Add
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

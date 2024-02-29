


import logo from "@/Public/Frame 3.svg";
import Image from "next/image";
import Link from "next/link";


export default function Home() {


    return (
        <div className="w-full h-screen relative bg-[#ffffff] flex 
       justify-center flex-col ">

            <div className=" w-[240px] h-[136px] absolute top-10  flex justify-center flex-col gap-[48px] ">
                <div className="mx-auto">
                    <Image
                        src={logo}
                        width={92.34}
                        height={34.31}
                        className="mx-auto"
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex  gap-1">
                        <div className="w-6 h-6 bg-[#0166ff] font-[400] text-[14px] leading-[20px] text-[#ffffff] rounded-[100px] text-center">
                            1
                        </div>
                        <div className="w-6 h-6 bg-[#0166ff] font-[400] text-[14px] leading-[20px] text-[#ffffff] rounded-[100px] text-center">
                            1
                        </div>
                        <div className="w-6 h-6 bg-[#0166ff] font-[400] text-[14px] leading-[20px] text-[#ffffff] rounded-[100px] text-center">
                            1
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

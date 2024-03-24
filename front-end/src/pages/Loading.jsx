

import { useEffect } from "react";
import logo from "@/Public/Frame 3.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
    useEffect(() => {
        const circle = document.querySelector(`.${styles.circle}`);
        if (circle) {
            circle.style.animation = `${styles.spin} 2s linear infinite`;
        }
    }, []);

    return (
        <div className="w-full h-screen">
            <div className="w-full h-full flex bg-[#ffffff] flex-col">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[172.23px] relative flex justify-center flex-col gap-[48px]">
                        <div className="mx-auto">
                            <Image
                                src={logo}
                                width={92.34}
                                height={34.31}
                                className="mx-auto"
                                alt="logo"
                            />
                        </div>
                        <div className={`gap-4 relative mx-auto flex flex-col justify-center `}>
                            <div className={`w-[32px] h-[32px] border-[3px] border-t-[#0166ff] mx-auto rounded-[100px] ${styles.circle}`}></div>
                            <div>
                                <p className="font-[600] text-4 leading-6 text-[#0f172a] ">Түр хүлээнэ үү...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

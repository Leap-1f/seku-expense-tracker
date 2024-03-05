import { Navbar } from "@/components/Navbar";
import { LeftSection } from "@/components/LeftSection";
import { RightSection } from "@/components/RigthSection"

export default function Home() {
  return (
    <div className="w-full relative h-[100vh]  bg-[#ffffff] flex items-center flex-col">
      <Navbar />
      <div className="bg-[#E5E7EB] w-full items-center flex ">
        <div className="w-[1200px] mt-8 flex  mx-auto">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
}

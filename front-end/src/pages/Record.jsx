import { Navbar } from "@/components/Navbar";
import { LeftSection } from "@/components/LeftSection";


export default function Home() {
  return (
    <div className="w-full h-screen  bg-[#ffffff] flex items-center flex-col">
      <Navbar />
      <div className="bg-[#E5E7EB] w-full items-center flex ">
        <div className="w-[1200px] mt-8 flex items-center mx-auto">
          <LeftSection />
        </div>
      </div>
    </div>
  );
}

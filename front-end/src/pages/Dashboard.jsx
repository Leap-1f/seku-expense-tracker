import { MainContent } from "@/components/MainContent";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <div className="flex flex-col relative  items-center w-full h-screen">
      <Navbar />
      <MainContent />
    </div>
  );
}

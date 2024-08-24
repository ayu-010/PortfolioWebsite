import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/Navbar";
import { FaHome } from "react-icons/fa";
import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import RecentProject from "@/components/RecentProject";
import { navItems } from "@/data";
import Education from "@/components/Education";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Personal from "@/components/Personal";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      
  <div className="max-w-7xl w-full">
  <FloatingNav navItems={navItems} />
  <Personal/>
  <Hero/>
  <Grid/>
  <RecentProject/>
  <Clients/>
  <Education/>
  <Approach/>
  <Footer/>
    </div>
 </main>
  );
}

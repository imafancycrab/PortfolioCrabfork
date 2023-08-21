import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className={`${inter.className} overflow-hidden`}>
      <div>
        <div className="group"> {/* Main Container */}
        <div className="relative bg-SpaceC p-12 w-[60vw] h-[27.5rem] transition-all duration-500 rounded-xl shadow-xl border-2 border-transparent group-hover:border-gray-500">
          <div className="absolute shadow-xl top-0 left-0 border-2 transition-all duration-500 border-transparent bg-yellow-500 w-full h-16 p-4 rounded-tl-xl rounded-tr-xl text-black text-3xl  group-hover:border-gray-800" id="crabfork">
              <span>crabfork</span>
          </div>

      <p className="p-8 -ml-16">Hello! I'm 🦀🍴 . I am a Swedish translator who is C1 proficient in the English language. I am interested in the field of astronomy, and other sciences. You can check out some of my work on my TalentHub, or you could check out my other links!</p>

          <div className="absolute bottom-0 shadow-xl flex flex-col gap-0 left-0 bg-vBlue border-2 transition-all duration-500 border-transparent w-full h-48 p-4 rounded-bl-xl rounded-br-xl text-white group-hover:border-gray-800" id="bottomLinks">
              <span className="font-bold text-2xl">My Links</span>
                <Link href="" className="text-xl ml-2 p-1 text-mainGreen border-2 border-transparent transition-colors hover:text-green-500 rounded-md hover:border-white duration-500 cursor-pointer">TalentHub</Link>
                <Link href="/discord" className="text-xl ml-2 p-1 text-mainGreen border-2 border-transparent transition-colors hover:text-green-500 rounded-md hover:border-white duration-500 cursor-pointer">Discord</Link>
                <Link href="" className="text-xl ml-2 p-1 text-mainGreen border-2 border-transparent transition-colors hover:text-green-500 rounded-md hover:border-white duration-500 cursor-pointer">DevForum</Link>
          </div>
        </div>
        </div>
        <Sidebar></Sidebar>
        <Footer></Footer>
        </div>
    </section>
  );
}

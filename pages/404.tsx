import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const notFound = () => {
  return (
    <>
      <section className={`${inter.className}`}>
        <div className="bg-SpaceC h-96 w-[50rem] rounded-2xl shadow-2xl p-6 flex flex-col justify-center items-center">
            <h2 className="text-5xl font-semibold">404</h2>
            <p>Oops! Page Not Found!</p>
            <div className="flex flex-row gap-2">
            <Link href="/" className="bg-vBlue p-4 rounded-xl mt-4 shadow-md w-24 flex justify-center items-center transition-all duration-500 border-2 border-transparent hover:bg-gray-600 hover:border-white">Home</Link>
            <Link href="https://www.vercel-status.com/" className="p-4 rounded-xl mt-4 shadow-md w-30 flex transition-all duration-500 border-2 border-transparent justify-center items-center hover:bg-[rgb(10,10,10)] hover:border-white">Server Status</Link>
            </div>
        </div>
      </section>
      <Sidebar></Sidebar>
    </>
  );
};

export default notFound;

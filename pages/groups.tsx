import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const Groups = () => {
    return (
        <>
            <section className={`${inter.className}`}>
              <div className="lightspeedLeft bg-SpaceC w-[60vw] h-96 border-2 border-funkyBlue  rounded-2xl shadow-2xl p-8 flex flex-col justify-between" id="groupContainer">
                <div>
                  <h2 className="text-4xl font-semibold text-funkyBlue mb-2">International Translation Services</h2>
                  <p className="text-lg">
                    International Translation Services is the biggest translation group on the Roblox platform. I have had a wonderful time translating here so far. The community is welcoming, the pay is competitive, and I do not have a single complaint. Overall, my experience has been exceedingly positive, and I would rate it a solid 10/10.
                  </p>
                </div>
                <Link href="https://www.translationsrblx.com/" className="inline-block text-funkyBlue font-medium text-lg mt-4 transition-colors duration-500 hover:text-blue-500">
                  Visit Their Website
                </Link>
              </div>
              <Sidebar></Sidebar>
            </section>
        </>
    );
}
 
export default Groups;
import Image from 'next/image'
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';

const Sidebar = () => {
    return (
        <>
        <div className="flex justify-center align-center" id="Sidebar"> {/* Sidebar */}
          <div className="absolute bg-SpaceC top-32 left-16 w-28 h-[65vh] rounded-xl transition-all duration-700 shadow-xl border-2 border-transparent hover:border-blue-200"> 
             <div className="relative top-6 gap-2 flex items-center justify-center flex-col" id="imageBoxes">
                <Link href="localized-games">
                 <div className="bg-vBlue w-20 cursor-pointer h-20 rounded-xl shadow-md flex items-center justify-center border-2 border-transparent transition-all duration-500 hover:bg-[rgb(33,33,33)] hover:border-white" id="localized">
                <Image
                  src="/localize.svg"
                  alt="Localized Image"
                  width={30}
                  height={30}
                />
                    <Tooltip anchorSelect="#localized" place="top">
                      Localized Games
                    </Tooltip>               
                 </div>
                </Link>
                <Link href="/groups">
                <div className="bg-vBlue w-20 cursor-pointer h-20 rounded-xl shadow-md flex align-center justify-center border-2 border-transparent transition-all duration-500 hover:bg-[rgb(33,33,33)] hover:border-white" id="groups">
                <Image
                  src="/groups.svg"
                  alt="Groups"
                  width={30}
                  height={30}
                />
                  <Tooltip anchorSelect="#groups" place="top">
                    Groups
                  </Tooltip> 
                </div>
                </Link>
                <Link href="rates">
                <div className="bg-vBlue w-20 cursor-pointer h-20 rounded-xl shadow-md flex align-center justify-center border-2 border-transparent transition-all duration-500 hover:bg-[rgb(33,33,33)] hover:border-white" id="rates">
                <Image
                  src="/rate2.svg"
                  alt="Payments Rates"
                  width={30}
                  height={30}
                />
                  <Tooltip anchorSelect="#rates" place="top">
                  Payments Rates
                  </Tooltip> 
                </div>
                </Link>
                <Link href="info">
                <div className="bg-vBlue w-20 cursor-pointer h-20 rounded-xl shadow-md flex align-center justify-center border-2 border-transparent transition-all duration-500 hover:bg-[rgb(33,33,33)] hover:border-white" id="info">
                <Image
                  src="/info.svg"
                  alt="Info"
                  width={30}
                  height={30}
                />
                  <Tooltip anchorSelect="#info" place="top">
                    Information
                  </Tooltip>
                </div>
                </Link>
                <Link href="/">
                <div className="bg-vBlue w-20 cursor-pointer h-20 rounded-xl shadow-md flex align-center justify-center border-2 border-transparent transition-all duration-500 hover:bg-[rgb(33,33,33)] hover:border-white" id="home">
                <Image
                  src="/home.svg"
                  alt="Home"
                  width={30}
                  height={30}
                />
                  <Tooltip anchorSelect="#home" place="top">
                    Home
                  </Tooltip> 
                </div>
                </Link>
              </div>
          </div>
        </div>
        </>
    );
}
 
export default Sidebar;
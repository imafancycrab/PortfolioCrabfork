import Sidebar from "@/components/Sidebar";
import { calculateTimePassed } from "@/components/dateHelper";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const Localized = () => {
  const hhDate = '2020-07-15'
  const itsDate = '2022-11-15'
  const failDate = '2022-02-14'
  const rcDate = '2022-07-09'
  const brcDate = '2022-08-18'
  const jumpDate = '2022-10-15'
  const rdollDate = '2022-12-22'
  const msDate = '2023-01-09'
  const chillDate = '2023-04-09'
  const winDate = '2023-06-09'
 

 const DateCalcHH = calculateTimePassed(hhDate);
 const DateCalcITS = calculateTimePassed(itsDate);
 const DateCalcFAIL = calculateTimePassed(failDate);
 const DateCalcRC = calculateTimePassed(rcDate);
 const DateCalcBRC = calculateTimePassed(jumpDate);
 const DateCalcJUMP = calculateTimePassed(rdollDate);
 const DateCalcRDOLL = calculateTimePassed(msDate);
 const DateCalcMS = calculateTimePassed(chillDate);
 const DateCalcCHILL = calculateTimePassed(chillDate);
 const DateCalcWIN = calculateTimePassed(winDate);


  return (
    <>
<section className={`${inter.className}`}>
  <div className="flex justify-center w-full md:w-[70vw] h-[90vh] rounded-2xl shadow-2xl">
    <div className="group">
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 p-4">
        <div className="game-card bg-SpaceC border-2 border-transparent transition-all duration-500 rounded-2xl shadow-2xl p-4 w-full md:w-[30rem] h-[23rem] hover:border-gray-400 hover:bg-vBlue">
        <Image
          src="/src/hh.png"
          alt="Game 1"
          width={300}
          height={200}
          quality={100}
          className="card-image w-full h-48 rounded-2xl shadow-2xl"
        />
        <div className="card-content p-2">
          <h2 className="game-title text-2xl font-semibold">Horrific Housing</h2>
          <p>Translated {DateCalcHH.yearsPassed} years or {DateCalcHH.daysPassed} days ago</p>
          <Link
            href=""
            className="view-button flex rounded-2xl shadow-md text-center justify-center align-center transition-all duration-500 border-2 border-transparent bg-gray-700 p-4 mt-4 hover:bg-gray-900 hover:border-gray-800"
          >
            View
          </Link>
        </div>
      </div>
      <div className="game-card bg-SpaceC border-2 border-transparent transition-all duration-500 rounded-2xl shadow-2xl p-4 w-full md:w-[30rem] md:ml-32 lg:ml-0 h-[23rem] hover:border-gray-400 hover:bg-vBlue">
        <Image
          src="/src/its.png"
          alt="Game 2"
          width={300}
          height={200}
          quality={100}
          className="card-image w-full h-48 rounded-2xl shadow-2xl"
        />
        <div className="card-content p-2">
          <h2 className="game-title text-2xl font-semibold">International Translation Services</h2>
          <p>Joined {DateCalcITS.yearsPassed} years or {DateCalcITS.daysPassed} days ago</p>
          <Link
            href=""
            className="view-button flex rounded-2xl shadow-md text-center justify-center align-center transition-all duration-500 border-2 border-transparent bg-gray-700 p-4 mt-4 hover:bg-gray-900 hover:border-gray-800"
          >
            View
          </Link>
        </div>
      </div>
      <div className="game-card bg-SpaceC border-2 border-transparent transition-all duration-500 rounded-2xl shadow-2xl p-4 w-full md:w-[30rem] md:ml-32 lg:ml-0 h-[23rem] hover:border-gray-400 hover:bg-vBlue">
        <Image
          src="/src/squid.png"
          alt="Game 3"
          width={300}
          height={200}
          quality={100}
          className="card-image w-full h-48 rounded-2xl shadow-2xl"
        />
        <div className="card-content p-2">
          <h2 className="game-title text-2xl font-semibold">99% Fail</h2>
          <p>Translated {DateCalcFAIL.yearsPassed} years or {DateCalcFAIL.daysPassed} days ago</p>
          <Link
            href=""
            className="view-button flex rounded-2xl shadow-md text-center justify-center align-center transition-all duration-500 border-2 border-transparent bg-gray-700 p-4 mt-4 hover:bg-gray-900 hover:border-gray-800"
          >
            View
          </Link>
        </div>
      </div>
      <div className="game-card bg-SpaceC border-2 border-transparent transition-all duration-500 rounded-2xl shadow-2xl p-4 w-full md:w-[30rem] md:ml-32 lg:ml-0 h-[23rem] hover:border-gray-400 hover:bg-vBlue">
        <Image
          src="/src/race click.png"
          alt="Game 4"
          width={300}
          height={200}
          quality={100}
          className="card-image w-full h-48 rounded-2xl shadow-2xl"
        />
        <div className="card-content p-2">
          <h2 className="game-title text-2xl font-semibold">Race Clicker</h2>
          <p>Translated {DateCalcRC.yearsPassed} years or {DateCalcRC.daysPassed} days ago</p>
          <Link
            href=""
            className="view-button flex rounded-2xl shadow-md text-center justify-center align-center transition-all duration-500 border-2 border-transparent bg-gray-700 p-4 mt-4 hover:bg-gray-900 hover:border-gray-800"
          >
            View
          </Link>
        </div>
      </div>
      <div className="game-card bg-SpaceC border-2 border-transparent transition-all duration-500 rounded-2xl shadow-2xl p-4 w-full md:w-[30rem] md:ml-32 lg:ml-0 h-[23rem] hover:border-gray-400 hover:bg-vBlue">
        <Image
          src="/src/backroom.png"
          alt="Game 5"
          width={300}
          height={200}
          quality={100}
          className="card-image w-full h-48 rounded-2xl shadow-2xl"
        />
        <div className="card-content p-2">
          <h2 className="game-title text-2xl font-semibold">Backrooms Race Clicker</h2>
          <p>Translated {DateCalcBRC.yearsPassed} years or {DateCalcBRC.daysPassed} days ago</p>
          <Link
            href=""
            className="view-button flex rounded-2xl shadow-md text-center justify-center align-center transition-all duration-500 border-2 border-transparent bg-gray-700 p-4 mt-4 hover:bg-gray-900 hover:border-gray-800"
          >
            View
          </Link>
        </div>
      </div>
      <div className="game-card bg-SpaceC border-2 border-transparent transition-all duration-500 rounded-2xl shadow-2xl p-4 w-full md:w-[30rem] md:ml-32 lg:ml-0 h-[23rem] hover:border-gray-400 hover:bg-vBlue">
        <Image
          src="/src/jump second.png"
          alt="Game 6"
          width={300}
          height={200}
          quality={100}
          className="card-image w-full h-48 rounded-2xl shadow-2xl"
        />
        <div className="card-content p-2">
          <h2 className="game-title text-2xl font-semibold">+1 Jump per Second</h2>
          <p>Translated {DateCalcJUMP.yearsPassed} years or {DateCalcJUMP.daysPassed} days ago</p>
          <Link
            href=""
            className="view-button flex rounded-2xl shadow-md text-center justify-center align-center transition-all duration-500 border-2 border-transparent bg-gray-700 p-4 mt-4 hover:bg-gray-900 hover:border-gray-800"
          >
            View
          </Link>
        </div>
      </div>
      <div className="game-card bg-SpaceC border-2 border-transparent transition-all duration-500 rounded-2xl shadow-2xl p-4 w-full md:w-[30rem] md:ml-32 lg:ml-0 h-[23rem] hover:border-gray-400 hover:bg-vBlue">
        <Image
          src="/src/ragdol.png"
          alt="Game 7"
          width={300}
          height={200}
          quality={100}
          className="card-image w-full h-48 rounded-2xl shadow-2xl"
        />
        <div className="card-content p-2">
          <h2 className="game-title text-2xl font-semibold">Ragdoll Simulator</h2>
          <p>Translated {DateCalcRDOLL.yearsPassed} years or {DateCalcRDOLL.daysPassed} days ago</p>
          <Link
            href=""
            className="view-button flex rounded-2xl shadow-md text-center justify-center align-center transition-all duration-500 border-2 border-transparent bg-gray-700 p-4 mt-4 hover:bg-gray-900 hover:border-gray-800"
          >
            View
          </Link>
        </div>
      </div>
      <div className="game-card bg-SpaceC border-2 border-transparent transition-all duration-500 rounded-2xl shadow-2xl p-4 w-full md:w-[30rem] md:ml-32 h-[23rem] lg:ml-0 hover:border-gray-400 hover:bg-vBlue">
        <Image
          src="/src/merge.png"
          alt="Game 8"
          width={300}
          height={200}
          quality={100}
          className="card-image w-full h-48 rounded-2xl shadow-2xl"
        />
        <div className="card-content p-2">
          <h2 className="game-title text-2xl font-semibold">Merge Simulator</h2>
          <p>Translated {DateCalcMS.yearsPassed} years or {DateCalcMS.daysPassed} days ago</p>
          <Link
            href=""
            className="view-button flex rounded-2xl shadow-md text-center justify-center align-center transition-all duration-500 border-2 border-transparent bg-gray-700 p-4 mt-4 hover:bg-gray-900 hover:border-gray-800"
          >
            View
          </Link>
        </div>
      </div>
      <div className="game-card bg-SpaceC border-2 border-transparent transition-all duration-500 rounded-2xl shadow-2xl p-4 w-full md:w-[30rem] md:ml-32 lg:ml-0 h-[23rem] hover:border-gray-400 hover:bg-vBlue">
        <Image
          src="/src/chill.png"
          alt="Game 9"
          width={300}
          height={200}
          quality={100}
          className="card-image w-full h-48 rounded-2xl shadow-2xl"
        />
        <div className="card-content p-2">
          <h2 className="game-title text-2xl font-semibold">Chill Obby</h2>
          <p>Translated {DateCalcCHILL.yearsPassed} years or {DateCalcCHILL.daysPassed} days ago</p>
          <Link
            href=""
            className="view-button flex rounded-2xl shadow-md text-center justify-center align-center transition-all duration-500 border-2 border-transparent bg-gray-700 p-4 mt-4 hover:bg-gray-900 hover:border-gray-800"
          >
            View
          </Link>
        </div>
      </div>
      <div className="game-card bg-SpaceC border-2 border-transparent transition-all duration-500 rounded-2xl shadow-2xl p-4 w-full md:w-[30rem] md:ml-32 h-[23rem] lg:ml-0 hover:border-gray-400 hover:bg-vBlue">
        <Image
          src="/src/win chance.png"
          alt="Game 10"
          width={300}
          height={200}
          quality={100}
          className="card-image w-full h-48 rounded-2xl shadow-2xl"
        />
        <div className="card-content p-2">
          <h2 className="game-title text-2xl font-semibold">1% Win Obby</h2>
          <p>Translated {DateCalcWIN.yearsPassed} years or {DateCalcWIN.daysPassed} days ago</p>
          <Link
            href=""
            className="view-button flex rounded-2xl shadow-md text-center justify-center align-center transition-all duration-500 border-2 border-transparent bg-gray-700 p-4 mt-4 hover:bg-gray-900 hover:border-gray-800"
          >
            View
          </Link>
        </div>
      </div>

    </div>
    </div>
  </div>
  <Sidebar></Sidebar>
</section>

    </>
  );
};

export default Localized;

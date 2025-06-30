import { Briefcase, Building2, MapPin, MonitorCog, Search, Users } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
<>
    <div className="px-5 py-3 xl:px-36 xl:py-5 bg-gray-100  gap-16 flex flex-col">

      <div className="flex justify-between gap-16">
        <div className="flex flex-col gap-7 md:w-3/4 lg:w-1/2">
          <p className=" text-[3em] md:text-[4em] lg:text-[4em] xl:text-[3em] font-medium">Find a job that suits your interest & skills.</p>
          <p className="text-gray-600">Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</p>

          <div className="bg-white py-3 px-2 flex-wrap items-center justify-center rounded-sm gap-2 flex">
            <div className="flex justify-center items-center gap-2 ">
              <Search  className="text-blue-500"/>
              <input type="text" placeholder="Job tittle, Keyword..." className="outline-none"/>
            </div>
            <p className="text-gray-600">|</p>
            <div className="flex justify-center items-center gap-2">
              <MapPin className="text-blue-500" />
              <input type="text"  placeholder="Your Location" className="outline-none"/>
            </div>
            <button className="bg-blue-500 px-5 py-3 text-white rounded-sm">Find Job</button>
          </div>
                  <p> <span className="text-gray-600">Suggestion: </span>Designer,Programing, <span className="text-blue-500">Digital Marketing</span>, Video, Animation.</p>

        </div>
        <div className="w-1/2 hidden lg:block">
          <Image src='/illustration.png' width={500} height={500} alt='illustration' />
        </div>
      </div>

      <div className="flex justify-between items-center flex-row gap-5 flex-wrap">
        <div className="bg-white w-56 flex items-center px-4 py-2 gap-4">
          <div className="bg-blue-100 p-3 rounded-sm text-blue-500 hover:bg-blue-500 hover:text-white hover:cursor-pointer">
            <Briefcase/>
            </div>
          <div>
            <p className="text-xl font-medium">175,221</p>
            <p className="text-sm text-gray-500">Live Job</p>
          </div>
        </div>
            <div className="bg-white w-56 flex items-center px-4 py-2 gap-4">
          <div className="bg-blue-100 p-3 rounded-sm text-blue-500 hover:bg-blue-500 hover:text-white hover:cursor-pointer">
           <Building2 />
            </div>
          <div>
            <p className="text-xl font-medium">97,354</p>
            <p className="text-sm text-gray-500">Companies</p>
          </div>
        </div>
            <div className="bg-white w-56 flex items-center px-4 py-2 gap-4">
          <div className="bg-blue-100 p-3 rounded-sm text-blue-500 hover:bg-blue-500 hover:text-white hover:cursor-pointer">
            <Users />
            </div>
          <div>
            <p className="text-xl font-medium">38,47,154</p>
            <p className="text-sm text-gray-500">Candidates</p>
          </div>
        </div>
            <div className="bg-white w-56 flex items-center px-4 py-2 gap-4">
          <div className="bg-blue-100 p-3 rounded-sm text-blue-500 hover:bg-blue-500 hover:text-white hover:cursor-pointer">
            <MonitorCog />
            </div>
          <div>
            <p className="text-xl font-medium">7,532</p>
            <p className="text-sm text-gray-500">New Jobs</p>
          </div>
        </div>
      </div>

      
  
    </div>

    <div className="bg-white px-5 py-6 xl:px-36 xl:py-20 gap-16 flex flex-col ">
      <div>
        <h1 className="text-4xl font-semibold">Most Popular Vacancies</h1>
      </div>
      <div className="flex flex-wrap gap-10">
        <div className="flex flex-col gap-2  w-40 lg:w-52  hover:text-blue-500 hover:text-decoration:underline hover:cursor-pointer group">
          <p className="text-md group-hover:text-decoration:underline">Anesthesiologists</p>
          <p className="text-sm text-gray-300 ">45,903 Open Positions</p>
        </div>
          <div className="flex flex-col gap-2  w-40 lg:w-52  hover:text-blue-500 hover:text-decoration:underline hover:cursor-pointer group">
          <p className="text-md group-hover:text-decoration:underline">Anesthesiologists</p>
          <p className="text-sm text-gray-300 ">45,904 Open Positions</p>
        </div>
          <div className="flex flex-col gap-2  w-40 lg:w-52  hover:text-blue-500 hover:text-decoration:underline hover:cursor-pointer group">
          <p className="text-md group-hover:text-decoration:underline">Anesthesiologists</p>
          <p className="text-sm text-gray-300 ">45,904 Open Positions</p>
        </div>
          <div className="flex flex-col gap-2  w-40 lg:w-52  hover:text-blue-500 hover:text-decoration:underline hover:cursor-pointer group">
          <p className="text-md group-hover:text-decoration:underline">Anesthesiologists</p>
          <p className="text-sm text-gray-300 ">45,904 Open Positions</p>
        </div>
          <div className="flex flex-col gap-2  w-40 lg:w-52  hover:text-blue-500 hover:text-decoration:underline hover:cursor-pointer group">
          <p className="text-md group-hover:text-decoration:underline">Anesthesiologists</p>
          <p className="text-sm text-gray-300 ">45,904 Open Positions</p>
        </div>
          <div className="flex flex-col gap-2  w-40 lg:w-52  hover:text-blue-500 hover:text-decoration:underline hover:cursor-pointer group">
          <p className="text-md group-hover:text-decoration:underline">Anesthesiologists</p>
          <p className="text-sm text-gray-300 ">45,904 Open Positions</p>
        </div>
          <div className="flex flex-col gap-2  w-40 lg:w-52  hover:text-blue-500 hover:text-decoration:underline hover:cursor-pointer group">
          <p className="text-md group-hover:text-decoration:underline">Anesthesiologists</p>
          <p className="text-sm text-gray-300 ">45,904 Open Positions</p>
        </div>
          <div className="flex flex-col gap-2  w-40 lg:w-52  hover:text-blue-500 hover:text-decoration:underline hover:cursor-pointer group">
          <p className="text-md group-hover:text-decoration:underline">Anesthesiologists</p>
          <p className="text-sm text-gray-300 ">45,904 Open Positions</p>
        </div>
          <div className="flex flex-col gap-2  w-40 lg:w-52  hover:text-blue-500 hover:text-decoration:underline hover:cursor-pointer group">
          <p className="text-md group-hover:text-decoration:underline">Anesthesiologists</p>
          <p className="text-sm text-gray-300 ">45,904 Open Positions</p>
        </div>
          <div className="flex flex-col gap-2  w-40 lg:w-52  hover:text-blue-500 hover:text-decoration:underline hover:cursor-pointer group">
          <p className="text-md group-hover:text-decoration:underline">Anesthesiologists</p>
          <p className="text-sm text-gray-300 ">45,904 Open Positions</p>
        </div>
          <div className="flex flex-col gap-2  w-40 lg:w-52  hover:text-blue-500 hover:text-decoration:underline hover:cursor-pointer group">
          <p className="text-md group-hover:text-decoration:underline">Anesthesiologists</p>
          <p className="text-sm text-gray-300 ">45,904 Open Positions</p>
        </div>
          <div className="flex flex-col gap-2  w-40 lg:w-52  hover:text-blue-500 hover:text-decoration:underline hover:cursor-pointer group">
          <p className="text-md group-hover:text-decoration:underline">Anesthesiologists</p>
          <p className="text-sm text-gray-300 ">45,904 Open Positions</p>
        </div>
      </div>
    </div>
    </>
  );
}

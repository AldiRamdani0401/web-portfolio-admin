// Assets
import {
  HiUsers,
  HiUserGroup,
  HiClock,
  HiOutlineExternalLink,
  HiUser,
  HiOutlineRss,
  HiOutlineStatusOnline,
  HiOutlineStatusOffline,
} from "react-icons/hi";

import SubContentLayout from "../../layouts/SubContentLayout";

const Dashboard = () => {
  return (
    <SubContentLayout>
      <div className="w-full text-center py-2 bg-slate-700">
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
      </div>

      {/* Summary Container */}
      <div className="flex flex-col overflow-y-auto pb-10">
        {/* Container Counter */}
        <div className="w-full flex flex-row justify-between gap-3 p-5">
          {/* Counter : Visitors (Today) */}
          <div className="flex flex-col w-full justify-around p-2 text-center text-slate-200 bg-blue-900 rounded-xl gap-3">
            <div className="flex flex-row">
              <h2 className="text-3xl font-normal w-full ">Today</h2>
              <HiOutlineExternalLink className="text-2xl" />
            </div>
            <div className="flex flex-row items-center justify-around gap-5">
              <div className="flex flex-col justify-center">
                <h3 className="text-5xl text-center font-bold">100</h3>
                <h4 className="text-xl text-center">Visitors</h4>
              </div>
              <HiUsers className="text-7xl" />
            </div>
            <div className="flex flex-row justify-center border-t-2 p-1 gap-2">
              <HiClock className="text-2xl self-center" />
              <h4 className="text-xl">update:</h4>
              <h4 className="text-xl">09:00 AM</h4>
            </div>
          </div>
          {/* Counter Visitors (All Time) */}
          <div className="flex flex-col w-full justify-around p-2 text-center text-slate-200 bg-blue-900 rounded-xl gap-3">
            <div className="flex flex-row">
              <h2 className="text-3xl font-normal w-full ">All Time</h2>
              <HiOutlineExternalLink className="text-2xl" />
            </div>
            <div className="flex flex-row items-center justify-around gap-5">
              <div className="flex flex-col justify-center">
                <h3 className="text-5xl text-center font-bold">100</h3>
                <h4 className="text-xl text-center">Visitors</h4>
              </div>
              <HiUsers className="text-7xl" />
            </div>
            <div className="flex flex-row justify-center border-t-2 p-1 gap-2">
              <HiClock className="text-2xl self-center" />
              <h4 className="text-xl">update:</h4>
              <h4 className="text-xl">09:00 AM</h4>
            </div>
          </div>
          {/* Counter Visitors (Online) */}
          <div className="flex flex-col w-full justify-around p-2 text-center text-slate-200 bg-blue-900 rounded-xl gap-3">
            <div className="flex flex-row">
              <h2 className="text-3xl font-normal w-full ">Online</h2>
              <HiOutlineExternalLink className="text-2xl" />
            </div>
            <div className="flex flex-row items-center justify-around gap-5">
              <div className="flex flex-col justify-center">
                <h3 className="text-5xl text-center font-bold">100</h3>
                <h4 className="text-xl text-center">Visitors</h4>
              </div>
              <div className="flex flex-row">
                <HiUser className="text-7xl" />
                <HiOutlineStatusOnline size={25} />
              </div>
            </div>
            <div className="flex flex-row justify-center border-t-2 p-1 gap-2">
              <HiClock className="text-2xl self-center" />
              <h4 className="text-xl">update:</h4>
              <h4 className="text-xl">09:00 AM</h4>
            </div>
          </div>
          {/* Counter Visitors (Offline) */}
          <div className="flex flex-col w-full justify-around p-2 text-center text-slate-200 bg-blue-900 rounded-xl gap-3">
            <div className="flex flex-row">
              <h2 className="text-3xl font-normal w-full ">Offline</h2>
              <HiOutlineExternalLink className="text-2xl" />
            </div>
            <div className="flex flex-row items-center justify-around gap-5">
              <div className="flex flex-col justify-center">
                <h3 className="text-5xl text-center font-bold">100</h3>
                <h4 className="text-xl text-center">Visitors</h4>
              </div>
              <div className="flex flex-row">
                <HiUser className="text-7xl" />
                <HiOutlineStatusOffline size={25} />
              </div>
            </div>
            <div className="flex flex-row justify-center border-t-2 p-1 gap-2">
              <HiClock className="text-2xl self-center" />
              <h4 className="text-xl">update:</h4>
              <h4 className="text-xl">09:00 AM</h4>
            </div>
          </div>
        </div>

        {/* Container Chart & Table */}
        <div className="w-full flex flex-row justify-between gap-5 px-5">
          {/* Chart : Visitors */}
          <div className="flex flex-col h-[370px] w-full justify-around p-2 text-center text-slate-200 bg-blue-900 rounded-xl gap-5">
            <h2 className="text-4xl font-normal">Today</h2>
            <div className="flex flex-row items-center justify-around gap-5">
              <div className="flex flex-col justify-center">
                <h3 className="text-6xl text-center font-bold">100</h3>
                <h4 className="text-2xl text-center">Visitors</h4>
              </div>
              <HiUsers className="text-7xl" />
            </div>
          </div>
          {/* Table : Visitors (Today) */}
          <div className="flex flex-col h-[370px] w-1/2 justify-around p-2 text-center text-slate-200 bg-blue-900 rounded-xl gap-5">
            <h2 className="text-4xl font-normal">All Time</h2>
            <div className="flex flex-row items-center justify-around gap-5">
              <div className="flex flex-col justify-center">
                <h3 className="text-6xl text-center font-bold">100</h3>
                <h4 className="text-2xl text-center">Visitors</h4>
              </div>
              <HiUserGroup className="text-7xl" />
            </div>
          </div>
        </div>

        {/* Container Table */}
        <div className="h-96 w-full flex flex-row justify-between gap-5 p-5">
          {/* Table : Visitors (Today) */}
          <div className="flex flex-col h-[370px] w-1/2 justify-around p-2 text-center text-slate-200 bg-blue-900 rounded-xl gap-5">
            <h2 className="text-4xl font-normal">All Time</h2>
            <div className="flex flex-row items-center justify-around gap-5">
              <div className="flex flex-col justify-center">
                <h3 className="text-6xl text-center font-bold">100</h3>
                <h4 className="text-2xl text-center">Visitors</h4>
              </div>
              <HiUserGroup className="text-7xl" />
            </div>
          </div>
          {/* Table : Visitors (Today) */}
          <div className="flex flex-col h-[370px] w-1/2 justify-around p-2 text-center text-slate-200 bg-blue-900 rounded-xl gap-5">
            <h2 className="text-4xl font-normal">All Time</h2>
            <div className="flex flex-row items-center justify-around gap-5">
              <div className="flex flex-col justify-center">
                <h3 className="text-6xl text-center font-bold">100</h3>
                <h4 className="text-2xl text-center">Visitors</h4>
              </div>
              <HiUserGroup className="text-7xl" />
            </div>
          </div>
          {/* Table : Visitors (Today) */}
          <div className="flex flex-col h-[370px] w-1/2 justify-around p-2 text-center text-slate-200 bg-blue-900 rounded-xl gap-5">
            <h2 className="text-4xl font-semibold">All Time</h2>
            <div className="flex flex-row items-center justify-around gap-5">
              <div className="flex flex-col justify-center">
                <h3 className="text-6xl text-center font-bold">100</h3>
                <h4 className="text-2xl text-center">Visitors</h4>
              </div>
              <HiUserGroup className="text-7xl" />
            </div>
          </div>
        </div>
      </div>
    </SubContentLayout>
  );
};

export default Dashboard;

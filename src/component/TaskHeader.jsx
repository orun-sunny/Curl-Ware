import { BsCalendarDate } from "react-icons/bs";
import { FaWifi, FaBatteryFull } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

export default function TaskHeader({ children }) {
  const today = new Date();
  const day = today.getDate();
  const currentTime = today.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="w-[414px] h-[118px] items-center  rounded-md bg-[#9395D3]">
      <div className="flex space-x-4 text-white justify-between px-4">
        <span>{currentTime}</span>
        <div className="flex gap-4 ">
          <GiNetworkBars />
          <FaWifi />
          <FaBatteryFull />
        </div>
      </div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold max-sm:mb-4 p-4">Todo App</h2>
        <div className="flex items-center space-x-5 px-2">
          <div className="flex items-center space-x-2 text-white">
            <BsCalendarDate className="w-[60px] h-[60px]" day={day} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

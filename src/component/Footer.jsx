import { FaBars } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-4 md:py-4 w-[414px] h-[68px] bg-white">
      <div className=" mx-auto">
        <div className="flex justify-around  space-x-24 mb-4">
          <button className="flex flex-col items-center">
            <FaBars size={20} className="text-gray-700" />
            <span className="text-xs text-[#6A6A6A] lg:text-sm">All</span>
          </button>
          <button className="flex flex-col items-center">
            <FaCheck size={20} className="text-gray-700" />
            <span className="text-xs text-[#6A6A6A] lg:text-sm">All</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

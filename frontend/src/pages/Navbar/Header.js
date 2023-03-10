import React, { useState } from "react";
import "./navbar.css"
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart,FiBookOpen } from "react-icons/fi";
import { AiFillPlusCircle } from 'react-icons/ai';
import { BiCodeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";

const Header = () => {
  const menus = [
    { name: "dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "Post_Scream", link: "/postscream", icon: AiFillPlusCircle },
    { name: "View Votes", link: "/viewVotes", icon: FiMessageSquare },
    { name: "Upcoming Contest", link: "/upcoming_Contest", icon: TbReportAnalytics, margin: true },
    { name: "Study Resources", link: "/studyResources", icon: FiBookOpen },
    { name: "Coding Problems", link: "/CodingProblems", icon: BiCodeAlt },
    { name: "Login", link: "/login", icon: AiOutlineHeart},
  ];
  const [open, setOpen] = useState(true);
  return (
    <>
    <div>
      <div className="topbar">
        <div className="logo">FIND-SIMRAN</div>
        <div className="profileIcon">
          <div className="userName">hello Moto</div>
          <div className="icon"><IoPersonCircleSharp size='60px'/></div>
        </div>
      </div>
    </div>
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-100" : "w-16" 
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end zz">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
   </>
  );
};


export default Header;
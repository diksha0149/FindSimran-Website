import React from 'react';
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
// import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart,FiBookOpen } from "react-icons/fi";
import { AiFillPlusCircle } from 'react-icons/ai';
import { BiCodeAlt } from "react-icons/bi";
import { IoPersonCircleSharp } from "react-icons/io5";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/postScream",
    name: "Post Scream",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/myscream",
    name: "My Scream",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/codingProblems",
    name: "CodingProblems",
    icon: <BsCartCheck />,
  },
  {
    path: "/upcomingcontest",
    name: "Contest",
    icon: <AiFillHeart />,
  },
  {
    path: "/StudyResources",
    name: "Resources",
    icon: <AiFillHeart />,
  },
  {
    path: "/login",
    name: "Login",
    icon: <BiAnalyse />,
  },
  {
    path: "/register",
    name: "Register",
    icon: <MdMessage />,
  }
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "150px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const [open, setOpen] = useState(true);
  const logged_user = localStorage.getItem("user");
  return (
    <>
    <div>
      <div className="topbar">
        <div className="logo">FIND-SIMRAN</div>
        <div className="profileIcon">
          <div className="userName">{logged_user}</div>
          <div className="icon"><IoPersonCircleSharp size='60px'/></div>
          <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                // localStorage.removeItem("jwt");
                navigate("/login");
              }}
            >
              Logout
            </button>
        </div>
      </div>
    </div>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            {/* <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  FindSimran
                </motion.h1>
              )}
            </AnimatePresence> */}

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;

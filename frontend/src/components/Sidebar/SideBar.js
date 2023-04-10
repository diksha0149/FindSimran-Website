import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaUsers } from "react-icons/fa";
import { AiFillFileAdd, AiOutlineQuestion, AiTwotoneFileExclamation } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUserAdd } from 'react-icons/ai';  
import {ImBooks} from "react-icons/im"
import {BsTrophyFill} from 'react-icons/bs'
import {GoSignIn} from "react-icons/go"
import { IoPerson, IoPersonCircleOutline, IoPersonCircleSharp, IoPersonOutline } from "react-icons/io5";
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
    icon: <FaUsers />,
  },
  {
    path: "/postScream",
    name: "Post Scream",
    icon: <AiFillFileAdd   />,
  },
  {
    path: "/myscream",
    name: "My Scream",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/codingProblems",
    name: "CodingProblems",
    icon: <AiOutlineQuestion />,
  },
  {
    path: "/upcomingcontest",
    name: "Contest",
    icon: <BsTrophyFill />,
  },
  {
    path: "/StudyResources",
    name: "Resources",
    icon: <ImBooks />,
  },
  {
    path: "/login",
    name: "Login",
    icon: <GoSignIn />,
  },
  {
    path: "/register",
    name: "Register",
    icon: <AiOutlineUserAdd />,
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
        <div className="logo text-white">FIND-SIMRAN</div>
        <div className="profileIcon shadow-lg">
          <div className="userName">{logged_user}</div>
          <div className="icon"> <IoPersonCircleOutline size='30'/></div>
          <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
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
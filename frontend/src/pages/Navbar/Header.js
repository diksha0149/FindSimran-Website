import React, { useState } from "react";
import "./navbar.css"
import PostScream from "../PostScream";
import {Navigate,Link} from 'react-router-dom'
import {
  AnnotationIcon,
  BookOpenIcon,
  CalendarIcon,
  CodeIcon,
  CollectionIcon,
  DocumentAddIcon,
  HandIcon,
  LoginIcon,
  LogoutIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/solid";
const Header = () => {
  return(
    <>
    <div className="header"> icon</div>
    <div className="main">
      <div className="sidebar">
        <div>Home</div>
        <div><Link to="/postscream">Post Screams</Link></div>
        <div>View Votes</div>
        <div>Upcoming Contest</div>
        <div>Study Resources</div>
        <div>Coding Problems</div>
        <div>Login</div>
      </div>
      <div className="mainbar">mainbar</div>
      <div className="rightbar">mainbar</div>
    </div>
    </>
  )
};

export default Header;
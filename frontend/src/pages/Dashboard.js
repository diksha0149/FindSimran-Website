import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Card.css";
import { HiOutlineLink } from "react-icons/hi";
// import "./style.css";
// import "./CodingProblems/CodingProblems.css";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
// } from "@material-tailwind/react";
const Dashboard = () => {
  const navigate = useNavigate();
  const [screams, setScreams] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("http://localhost:5000/api/allScreams");
      // console.log(data.data.screams);
      console.log(data.data.screams[0].postedBy.avatar);
      setScreams(data.data.screams);
    };
    fetchdata();
  }, []);
  const logged_user = localStorage.getItem("user");
  return (
    <>
      <div className="page">
        {/* <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/login");
              }}
            >
              Logout
            </button>
            <div>{logged_user}</div> */}
        {screams.map((scream, index) => (
          <div key={index}>
            <div className="container">
              <div className="card">
                <div className="card__footer">
                  <div className="user_card">
                    <img
                      src={scream.postedBy.avatar}
                      alt="user_image"
                      className="user__image"
                    />
                    <div className="user__info">
                      <h5>{scream.postedBy.UserName}</h5>
                      <small>2h ago</small>
                    </div>
                    <div className="url"><a href={scream.link}><HiOutlineLink/></a></div>
                  </div>
                </div>
                <div className="card__body">
                  <span className="tag tag-blue">{scream.title}</span>
                  <h4 className="description">{scream.description}</h4>
                  <p>{scream.skills}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;



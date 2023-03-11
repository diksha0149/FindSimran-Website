import React from "react";
import Header from "./pages/Navbar/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../src/pages/style.css";
import "./pages/CodingProblems/CodingProblems.css";
const MyScreams = () => {
  const navigate = useNavigate();
  const [myscream, setMyScream] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/myScreams",{
      headers:{
        "Authorization": "Bearer "+localStorage.getItem("token")
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result);
      setMyScream(result.myscream);
    })
  }, []);
  const logged_user = localStorage.getItem("user");
  return (
    <>
      <div className="main">
        <div className="div1">
          <Header />
        </div>
        <div className="div2"> hello
          <div>
            {myscream.map(item=>{
              return (
                <>
                <div className="container">
                  <div className="card">
                    <div className="card__footer">
                      <div className="user">
                        <img
                          src="https://i.pravatar.cc/40?img=1"
                          alt="user__image"
                          className="user__image"
                        />
                        <div className="user__info">
                          <h5>Jane Doe</h5>
                          <small>2h ago</small>
                        </div>
                        <div className="link">fbheb</div>
                      </div>
                    </div>
                    <div className="card__body">
                      <span className="tag tag-blue">Technology</span>
                      {/* <h4>{scream.title}</h4>
                      <p>{scream.description}</p> */}
                    </div>
                  </div>
                </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyScreams;

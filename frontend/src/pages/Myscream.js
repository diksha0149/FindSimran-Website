import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  NavLink } from 'react-router-dom'
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";
import "./Card.css";

const MyScreams = () => {
  const navigate = useNavigate();
  const [myscream, setMyscream] = useState([]);
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
      setMyscream(result.myscream);
    })
  }, []);
  const logged_user = localStorage.getItem("user");

  const deleteScream=(screamid)=>{
    fetch(`http://localhost:5000/api/deletescream/${screamid}`,{
      method:"delete",
      headers:{
        Authorization: "Bearer "+localStorage.getItem("token")
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(screamid)
      const newData = myscream.filter(item=>{
        return item.postedBy._id !== result._id
      })
      setMyscream(newData);
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <>
          <div>
          {myscream.map((scream, index) => (
          <div key={index}>
            <div className="container">
              <div className="card">
                <div className="card__footer">
                  <div className="user_card">
                    <img
                      src={myscream[index].postedBy.avatar}
                      alt="user__image"
                      className="user__image"
                    />
                    <div className="user__info">
                    <h5>{myscream[index].postedBy.UserName}</h5>
                      <small>2h ago</small>
                    </div>
                    
                    <div className="url">
                      <div className="delete" onClick={(e)=>{
                        e.preventDefault()
                        deleteScream(myscream[index]._id)
                      }}><AiFillDelete/></div>
                      <a href={myscream[index].link}><HiOutlineLink/></a></div>
                  </div>
                </div>
                <div className="card__body">
                  <span className="tag tag-blue">{myscream[index].title}</span>
                  <h4>{myscream[index].description}</h4>
                  <p>{myscream[index].skills}</p>
                </div>
                
              </div>
              
            </div>
          </div>
        ))}
          </div>
    </>
  );
};

export default MyScreams;

import React from 'react'
import Header from './Navbar/Header'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
const Dashboard = () => {
  const navigate  = useNavigate();
  const [screams,setScreams] = useState("");
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/login')
    }
  },[])
  useEffect(()=>{
    const fetchdata = async ()=>{
      const data = await axios.get("http://localhost:5000/api/screms");
      console.log(data);
      setScreams(data);
    };
    fetchdata();
  },[]);
  return (
    <div>
      dashboard
      
    </div>
    
  )
}

export default Dashboard
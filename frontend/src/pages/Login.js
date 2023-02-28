import React, {useState} from 'react'
import {Navigate,Link, useNavigate} from 'react-router-dom'
import axios from "axios"

const Login = () => {
  const navigate = useNavigate();
  const initialState = {email: '', password: ''}
  const [userData, setUserData] = useState(initialState)
  const {email, password} = userData
  const [login, setLogin] = useState(false);
  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]: value})
  }
  // const handleSubmit = async (e)=>{
  //   e.preventDefault();
  //   const response = await fetch('http://localhost:5000/api/login',{
  //       method: 'POST',
  //       body: JSON.stringify(userData),
  //       headers:{
  //           'Content-Type':'application/json'
  //       }
  //   }).then(result=>{
  //     console.log(result)
  //     localStorage.setItem('token',result.data.token)
  //   }).catch(error=>{
  //     console.log(error);
  //   })
  //   // console.log(response.data);
  //   // if(response.status==200){
  //   //   console.log(response)
  //   //   localStorage.setItem('token',response.data.token)
  //   //   setLogin(true);
  //   // }
  //   // console.log(response);

// }
const handleSubmit =(e)=>{
  e.preventDefault();
  axios.post("http://localhost:5000/api/login",{
    email:email,
    password: password
  }).then(result=>{
    console.log(result.data)
    localStorage.setItem('token',result.data.token)
    localStorage.setItem('user',result.data.profile_name)
    navigate('/dashboard')
  })
  .catch(error=>{
    console.log(error);
  })
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        <div className='heading'>Email:</div>
          <input type="email" 
          name="email" 
          onChange={handleChangeInput} 
          value={email}
          />
        </label>
        <br/>
        <label>
        <div className='heading'>Password:</div>
          <input type="password" 
          name="password" 
          onChange={handleChangeInput} 
           value={password}
           />
        </label>
        <br/>
        <button type="submit" value="Submit" disabled={email && password ? false : true} onClick={handleSubmit}>Login</button>
          {/* {login ? (
                  <Navigate to="/dashboard" />
                  ) : (
                  <p className="text-danger">Enter correct email and password</p>
                  )
          } */}
        <p>You don't have an account? <Link to="/">Register Now</Link></p>
      </form>
  </div>
  )
}

export default Login

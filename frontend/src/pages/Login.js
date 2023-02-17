import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// import axios from "axios"
const Login = () => {
  const initialState = {email: '', password: ''}
  const [userData, setUserData] = useState(initialState)
  const {email, password} = userData

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]: value})
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/login',{
        method: 'POST',
        body: JSON.stringify(userData),
        headers:{
            'Content-Type':'application/json'
        }
    })
    console.log(response);

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
        <button type="submit" value="Submit">Login</button>

        {/* <p>You don't have an account? <Link to="/register">Register Now</Link></p> */}
      </form>
  </div>
  )
}

export default Login

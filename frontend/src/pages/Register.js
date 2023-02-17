import React, { useState } from 'react'

const Register = () => {
    const initialState = {UserName: '',email:'',password:''}
    const [userData, setUserData] = useState(initialState)
    const {name,email,password} = userData
    const handleChangeInput=(e)=>{
        const {name,value} = e.target; 
        setUserData({...userData, [name]: value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/register',{
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
            <div className='heading'>UserName:</div>
            <input type="text" name="UserName" 
            onChange={handleChangeInput}
            value={name}
            />
            </label>
            <br/>
            <label>
            <div className='heading'>Email:</div>
            <input type="email" name="email" 
            onChange={handleChangeInput} 
            value={email}
            />
            </label>
            <br/>
            <label>
            <div className='heading'>Password:</div>
            <input type="password" name="password" 
            onChange={handleChangeInput}
            value={password}
            />
            </label>
            <br/>
            <button type="submit" value="Submit">Register</button>

        </form>
    </div>
  )
}

export default Register


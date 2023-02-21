import React, { useState } from 'react'
import { Navigate ,Link } from 'react-router-dom';
import Login from './Login';
import dashboard from './Dashboard';
const Register = () => {
    const initialState = {UserName: '',email:'',password:''}
    const [userData, setUserData] = useState(initialState)
    const {UserName,email,password} = userData
    const [register, setRegister] = useState(false);
    const [username, setUsername] = useState(true);
    const handleChangeInput=(e)=>{
        const {name,value} = e.target; 
        setUserData({...userData, [name]: value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(UserName.length===0){
           alert("enter Username");
        }
        else if(!re.test(email)){
            alert("enter email");
        }
        else if(password.length<8){
            alert("enter pass");
        }
        else{
            const response = await fetch('http://localhost:5000/api/register',{
                method: 'POST',
                body: JSON.stringify(userData),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            // .then((result)=>{
            //     console.log(result);
            //     alert("submitted");
            //     setRegister(true);
            // })
            // .catch((error)=>{
            //     error = new Error();
            //     console.log(error);
            // })
            if(response.status===400){
                setUsername(false);
            }
            else setRegister(true);
            console.log(response.status);
        }

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
            <div className='heading'>UserName:</div>
            <input type="text" name="UserName" 
            onChange={handleChangeInput}
            value={UserName}
            />
            {!username && (
                <p>username already exists</p>
            )}
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
            <button type="submit" value="Submit" disabled={UserName && email && password ? false : true} onClick={handleSubmit}>Register</button>
            {register ? (
                <Navigate to="/dashboard" />
                ) : (
                <p className="text-danger">You Are Not Registered</p>
                )
            }
            <p>If you already have an account? <Link to="/login">Login Now</Link></p>
        </form>
    </div>
  )
}

export default Register


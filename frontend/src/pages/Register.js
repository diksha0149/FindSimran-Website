import React, { useState } from 'react'
import { Navigate ,NavLink , useNavigate} from 'react-router-dom';
// import Login from './Login';
// import dashboard from './Dashboard';
// import './Register.css'
const Register = () => {
    const navigate = useNavigate();
    const initialState = {UserName: '',email:'',password:''}
    const [userData, setUserData] = useState(initialState)
    const {UserName,email,password} = userData
    const [register, setRegister] = useState(false);
    const [username, setUsername] = useState(true);
    const [error, setError] = useState("");
    const handleChangeInput=(e)=>{
        const {name,value} = e.target; 
        setUserData({...userData, [name]: value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // if(UserName.length===0){
        //    setError("enter Username");
        // }
        // else if(!re.test(email)){
        //     // setUserEmail(false);
        //     setError("enter correct email")
        //     return ;
        // }
        // else if(password.length<8){
        //     alert("enter pass");
        // }
        // else{
            const response = await fetch('http://localhost:5000/api/register',{
                method: 'POST',
                body: JSON.stringify(userData),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.error){
                    alert(data.error);
                    setError(data.error)
                }
                else {
                    setError("");
                    setRegister(true);
                    console.log(JSON.stringify(data.user))
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", data.user.UserName);
                    <Navigate to="/dashboard" />
                }
            })
            .catch(err=>{
                console.log(error);
            })
            // console.log(response)
            // if(!response){
            //     setUsername(false);
            //     setError(response)
                
            // }
            // else setRegister(true);
            // console.log(response.status);
        // }

    }
  return (
    <div>
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50" >
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            FindSimran
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSubmit}> 
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                UserName
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="UserName"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={handleChangeInput}
                                    value={UserName}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChangeInput} 
                                    value={email}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChangeInput}
                                    value={password}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        { error.length>0 && (
                        <h1  className="flex items-center mt-4 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">{error}</h1>
                        // alert(error)
                        )
                        }
                        <div className="flex items-center mt-4 ">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                            disabled={UserName && email && password ? false : true} onClick={handleSubmit}>
                                Register
                            </button>
                            {  register && (
                                <Navigate to="/dashboard" />
                                ) 
                            }
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <span>
                        <NavLink to="/login">Login</NavLink>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register


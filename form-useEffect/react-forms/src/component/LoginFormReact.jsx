/* eslint-disable no-unused-vars */
import { useState } from "react";

//Using separate user States
const LoginFormReact =()=>{

    const [user,setUser] =useState({
        userName:"",
        password:""
    });

    const handleInputChange =(e)=>{
        const {name, value} = e.target;
        setUser((prev)=>({...prev,[name]:value}));
    }
    const handleFormSubmit =(e)=>{
        e.preventDefault();    
        console.log(user);
               
    }
    // name= value= should be same.
    return(
       
          <div className="container">
            <div className="card">
                <h1> Login Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="userName" 
                        required 
                        autoComplete="off" 
                        value={user.userName}
                        onChange={handleInputChange}
                        />

                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        required 
                        autoComplete="off" 
                        value={user.password}
                        onChange={handleInputChange}
                        />

                    <button type="submit"> Login </button>
                </form>
            </div>
          </div>  
    )
}


export default LoginFormReact;
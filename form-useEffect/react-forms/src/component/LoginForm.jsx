/* eslint-disable no-unused-vars */
import { useState } from "react";

//Using separate user States
const LoginForm =()=>{

    const [username, setUsername]=useState("");
    const [password, setpassword]=useState("");
   /* const [user,setUser] =useState({
        userName:"",
        password:""
    });*/

    const handleFormHandle =(e)=>{
        e.preventDefault();
        
        /*const loginData={
            username: username,
            password: password
        }*/
            const loginData={
               username,
               password
            }
            console.log(loginData);
            
    }
    
    return(
       
          <div className="container">
            <div className="card">
                <h1> Login Form</h1>
                <form onSubmit={handleFormHandle}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        required 
                        autoComplete="off" 
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        />

                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        required 
                        autoComplete="off" 
                        value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                        />

                    <button type="submit"> Login </button>
                </form>
            </div>
          </div>  
    )
}


export default LoginForm;
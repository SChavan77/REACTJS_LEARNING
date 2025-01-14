
/* eslint-disable no-unused-vars */
import { useState } from "react";

const ContactForm =()=>{

    const [user,setUser] =useState({
        userName:"",
        email:"",
        message:""
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
                <h1> Contact Form</h1>
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

                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        required 
                        autoComplete="off" 
                        value={user.email}
                        onChange={handleInputChange}
                        />
                    <label htmlFor="message">Message</label>
                    <textarea 
                        type="text" 
                        name="message" 
                        required 
                        autoComplete="off" 
                        value={user.message}
                        onChange={handleInputChange}
                        />

                    <button type="submit"> Send Message </button>
                </form>
            </div>
          </div>  
    )
}

export default ContactForm;
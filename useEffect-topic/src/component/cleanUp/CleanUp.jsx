/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react"
import '../index.css'

const CleanUp  =()=>{

    const [count, setCount]=useState(0);

   /* See the output., its an abtrupt printing
   setInterval(()=>{
        setCount(count+1) //setCount((prev)=>prev+1)
    },1000)*/

    //setTimeOut, fetch API & other Async operations : wil come udner webAPI

    //When the component mounts, useEffect runs it;s effect funtion to prfotm it's operation - atleast in the beginning
    //Whenver the dependency's value changes, that time it's useEffect reruns
    useEffect (()=>{

       const timer=setInterval(()=>{
            setCount((prev)=>prev+1) ;//setCount((prev)=>prev+1)
        },1000);
        return ()=> clearInterval(timer) //then, prev will consider actual count value
    },[])

    return (
         <div className="container">
            <div className="container"> 
                <p>Use Effect CleanUp Demo</p>
                <div className="odometer" id="odometer">
                    {count}
                </div>
                <h3 className="title">
                    Subscribers <br /> Realtime Counter
                </h3>
            </div>
         </div>
    )
}

export default CleanUp;
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";

export const ToogleSwitch=()=>{
    const [isOn, setIsOn]=useState(false);

    const handleToggleSwitch =()=>{
        setIsOn(!isOn);
    };

    const checkIsOn=isOn? "on": "off";
   // const bgColor={backgroundColor: isOn? "#4caf50": "#f44336"} ;//This is an object, so {}
   const bgColor={backgroundColor: isOn? "#4caf50": ""}

    return(
        <>
            <h1 
            style={{color: "#000", textAlign:"center"}}>
            Toggle Switch <IoIosSwitch style={{color: "#4caf50", textAlign:"center"}}/>
            </h1>
            <div className="toggle-switch" 
                 style={bgColor} 
                 onClick={handleToggleSwitch}>

                <div className={`switch  ${checkIsOn}`}>
                    <span className="switch-case"> {checkIsOn} </span>
                </div>

            </div>
        </>
    )
}
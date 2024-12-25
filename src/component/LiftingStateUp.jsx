/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"

export const LiftignStateUp = ()=>{
    const [inputValue, setInputValue] =useState(""); //LIFTED TO HERE from InputComponent
    return(
        <>
            <InputComponent  inputVal={inputValue} setInputVal={setInputValue}/>
            <DisplayComponent inputVal={inputValue}  />
        </>
    )
}

const InputComponent = ({inputVal,setInputVal}) =>{
   // const [inputValue, setInputValue] =useState("");
    return(
        <>
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={inputVal}
                onChange={(e)=>{
                    setInputVal(e.target.value) //onChange enables user to enter text 
                }}  
                ></input>
        </>
    );
};

const DisplayComponent = ({inputVal})=> {
   return <p>The Current Input value is {inputVal} </p>;
};

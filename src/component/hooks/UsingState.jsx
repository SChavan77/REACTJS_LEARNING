/* eslint-disable react/prop-types */
import { useState } from "react";
import "../EVV.css";


const UsingState=()=>{

    let [count,setCount]=useState(0);
    console.log("Parent Component rendered");

    return (
        <>
        <div className="main-div">
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}> Increment </button>
        </div>
        <ChildComp count={count}/>
        {/* <Sibling count={count}/> */}
        </>

    );
};


function ChildComp({count})
{
    console.log("Child Component rendered");
    return (
        <div className="main-div">
            <h2>Child Component -{count}</h2>
        </div>
    )
}


export default UsingState

/**
 * 
 * const handleButton =()=>{
 *  setCount(()=>count+1);
 * }
 * 
 * Dont use count++, always update using setCount()
 * 
 * Here once the count is updated (ie. UsingState component is changed) then ChildComponent will also be re-rendered.
 * Hence "Child Component rendered" will print everytime.
 */
import { useState } from "react";

export const Sample =()=>{
     const [count,setCount]=useState(0);

     const handleIncrement =()=>{
        setCount(count+1);
        console.log("Inner" +count);
     }
     console.log("Outer" +count);

    return (
        <div style={{textAlign:"center"}}>
            <h1>useState Hook!</h1>
            <br/>
            <p>Count:{count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

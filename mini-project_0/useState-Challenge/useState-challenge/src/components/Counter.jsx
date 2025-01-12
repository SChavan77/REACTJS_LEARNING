/* eslint-disable no-unused-vars */
import { useState } from "react";

const Counter =() =>{
    const [count,setCount]=useState(0);
    const [step,setStep]=useState(0);

    const handleIncrement =()=>{
        setCount(count+step);
    }

    const handleDecrement =()=>{
        setCount(count-step);
    }

    const handleReset =()=>{
        setCount(0);
        setStep(0);
    }
    const handleStepChange =(e)=>{
        setStep((Number)(e.target.value));
    }

    return (
        <>
            <h1>Counter Challenge</h1>
            <p>Count:{count}</p>
            <form>
            <label>
                Step:
                <input type="number" value={step} onChange={(e)=>handleStepChange(e)}></input>
            </label>
                
            </form>
            <div>
                <button onClick={handleIncrement} disabled={count>=100}>Increment</button>
                <button onClick={handleDecrement} disabled={count<=0}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            
        </>
    );
}
export default Counter;


//On clicking backspace, it should also field clear. Edge case
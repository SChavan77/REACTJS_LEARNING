/* eslint-disable react/display-name */
import { forwardRef, useId, useRef } from "react";

/* eslint-disable react/no-string-refs */
export const ForwardRef =()=>{
    const usernme=useRef(null);
    const password=useRef(null);

    const handleSubmitForm =(e)=>{
        e.preventDefault();
        console.log(usernme.current.value, password.current.value);
    }
    return(
        <form onSubmit={handleSubmitForm}>
            <BeforeV19ForwardRef lavel="username" ref={usernme} />
            <BeforeV19ForwardRef lavel="username" ref={password} />
            <button type="submit">Submit </button>
        </form>
    )

}


const BeforeV19ForwardRef = forwardRef((prop,ref) =>{
    const id=useId();
    return (
        <div>
             <label htmlFor={id}>{prop.label}</label>
             <input type="text" ref={ref}>{prop.label}</input>
        </div>
    );
}
);
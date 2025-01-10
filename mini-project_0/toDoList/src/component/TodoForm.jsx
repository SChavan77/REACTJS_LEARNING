/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Todo from "./Todo.jsx";
import { useEffect, useState } from "react";

export const TodoForm= ({onAddTodo})=>{
     const [inputValue,setInputValue] = useState({}); //madeit object
     
    const handleInputChange = (value)=>{
       // setInputValue(value);  //Instead of doingit directly in inline function in onChange
        setInputValue({id:value,content:value, checked:false}); //Instead of passing value, first init this way
    }

    const handleSubmitForm =(event)=>{
        event.preventDefault();
        onAddTodo(inputValue); //From Child to Parent function call. & Now it's an object
        setInputValue({id:"",content:"", checked:false});
    }

    return(
         <section className="form">
                        <form onSubmit={handleSubmitForm}>
                            <div>
                                <input 
                                type="text" 
                                className="todo-input" autoComplete="off" 
                                value={inputValue.content}
                                onChange={(e)=>handleInputChange(e.target.value)}
                                />
                            </div>
                            <div>
                                <button type="submit" className="todo-btn">
                                Add task </button>
                            </div>
                        </form>
                    </section>
    );
}

/*

inputValue is now a object, not a value. do de-structure it in the parent function.
OR pass the inputValue.content in onAddTodo()

*/
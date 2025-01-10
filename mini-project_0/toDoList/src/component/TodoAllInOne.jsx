/* eslint-disable no-unused-vars */
import './Todo.css';
import { useEffect, useState } from "react";
import { MdCheck ,MdDeleteForever} from 'react-icons/md';
import { TodoForm } from './TodoForm';

const TodoAllInOne =()=>{
    const [inputValue,setInputValue] =useState("");
    const [task,setTask]=useState([]);
    const [dateTime, setDateTime]=useState("");

    const handleInputChange = (value)=>{
        setInputValue(value);  //Instead of doingit directly in inline function in onChange
    }

    const handleSubmitForm =(event)=>{
        event.preventDefault();   //On enter text , press enter, url localHost.../? : means submitted. So let's prevent that.
        if(!inputValue) return;
        
        if(task.includes(inputValue))
        {   
            setInputValue("");
            return;
        }
                

        //Taking the existign array & updating that with one more element
        setTask((previous)=>[...previous, inputValue]); //Spread operator

        setInputValue("");
    }

const handleTaskDelete =(item)=>{
    console.log(task);
    
        const updatedTask=task.filter((val)=>
                 val!=item);
        console.log(updatedTask);
        
        setTask(updatedTask);
    }


const handleAllClear = ()=>{
    setTask([]);
}


    //Todo Date & Time
   /* const now=new Date();
    const formattedDate=now.toLocaleDateString();

    const formattedTime=now.toLocaleTimeString(); */
    //After every 1 sec. time should be updated on it's own.
    
    /*setInterval(()=>{
        const now=new Date();
        const formattedDate=now.toLocaleDateString();
        const formattedTime=now.toLocaleTimeString();
        setDateTime(`${formattedDate} - ${formattedTime}`);
    },1000);*/

    //To AVOID MEMORY LEAKS
    useEffect (()=>{
        const interval=setInterval(()=>{
            const now=new Date();
            const formattedDate=now.toLocaleDateString();
            const formattedTime=now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`);
        },1000);
        return ()=> clearInterval(interval);
    },[]);

    return(
            <section className="todo-container">
                <header>
                    <h1> Todo List</h1>
                </header>
                <h2 className='date-time'>{dateTime}</h2>
                <section className="form">
                        <form onSubmit={handleSubmitForm}>
                            <div>
                                <input 
                                type="text" 
                                className="todo-input" autoComplete="off" 
                                value={inputValue}
                                onChange={(e)=>handleInputChange(e.target.value)}
                                />
                            </div>
                            <div>
                                <button type="submit" className="todo-btn">
                                Add task </button>
                            </div>
                        </form>
                    </section>
            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((curTask,index)=>{
                            return(
                                <li key={index} className='todo-item'>
                                <span>{curTask}</span>
                                <button className='check-btn' >
                                <MdCheck/></button>
                                <button className='delete-btn' onClick={()=>handleTaskDelete(curTask)}><MdDeleteForever/></button>
                            </li>
                            ) ;
                        })
                    }
                </ul>
                </section>
                <section>
                    <button className='clear-btn' onClick={handleAllClear}>Clear All</button>
            </section>
        </section>
    )
}

export default TodoAllInOne;
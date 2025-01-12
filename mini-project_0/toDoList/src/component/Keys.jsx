/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Todo.css';
import { useEffect, useState } from "react";
import { MdCheck ,MdDeleteForever} from 'react-icons/md';

const Keys =()=>{
    
    const [inputValue,setInputValue] =useState("");
    
    const [task,setTask]=useState([]);
    
    const [dateTime, setDateTime]=useState("");

    const handleInputChange = (value)=>{
        setInputValue(value); 
    }


    const handleSubmitForm =(event)=>{
        event.preventDefault();  
        if(!inputValue) return;
        
        if(task.includes(inputValue))
        {   
            setInputValue("");
            return;
        }

        setTask((previous)=>[inputValue, ...previous]); //Spread operator

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
                                className="todo-input" 
                                autoComplete="off" 
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
                <ul className="todo-list">
                    {
                        task.map((curTask,index)=>{
                            return(
                                <TodoLists key={index}  data={curTask}/>
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

const TodoLists =({data})=>{

    return(
    <li  className='todo-item'>
        <span>{data}</span>
        <input type='text' />
       {/*<button className='check-btn'>
            <MdCheck/>
        </button>*/}
        <button>
            <MdDeleteForever className='delete-htn'/>
        </button>
        </li>
    );
}

export default Keys;
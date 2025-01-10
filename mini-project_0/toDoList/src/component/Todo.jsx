/* eslint-disable no-unused-vars */
import './Todo.css';
import { useEffect, useState } from "react";
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';
import { getLocalStorage,setLocalStorage} from './TodoLocalStorage';


const todoKey="reactTodo";

const Todo =()=>{

   //On refreshing the page, it should init with the localstorage data (from previous history)
    const [task,setTask] = useState(() => getLocalStorage());
   
    const handleSubmitForm =(inputValue)=>{
    
        const {id,content, checked} = inputValue;

        if(!content) return;
     
        const todoListExist=task.find((curTask)=>curTask.content===content);

        if (todoListExist) return;

        setTask((previous)=>[...previous, {id, content, checked}]); //here we have to create an object , so {}
    };

    // Add data to localStorage
   setLocalStorage(task);

const handleTaskDelete =(item)=>{
        const updatedTask=task.filter((val)=>
                 val.content!==item); //As now, it has became an object.
        console.log(updatedTask);
        
        setTask(updatedTask);
    }

//Only we need to make sure to update CSS styling (checked or unchecked)

const handleTaskCheck = (item) =>{

        //const todoListExist = task.find((curTask)=>curTask.content===item);
        //I need to return all the elements with the stike-through styling of the checked element.
        const updatedTask=task.map((curTask) =>{
            if(curTask.content===item) {
                return {...curTask,checked: !curTask.checked} //if need to update any of the atributes of an object, keeping id & value unchanged say here. we use this operator
            }
            else{
                return curTask;
            }
        })
        setTask(updatedTask);
}

const handleAllClear = ()=>{
        setTask([]);
        console.log(task);
    }

    return(
            <section className="todo-container">
                <header>
                    <h1> Todo List</h1>
                    <TodoDate />
                </header>
                <TodoForm onAddTodo={handleSubmitForm}/>
                <section className='myUnOrdList'>
                    <ul>
                    {
                        task.map((curTask)=>{
                           return <TodoList 
                                    key={curTask.id} 
                                    data={curTask.content}
                                    checked={curTask.checked}
                                    onHandleDeleteTodo ={handleTaskDelete}
                                    onHandleCheckTodo ={handleTaskCheck}
                           />
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
export default Todo;


/**
 * 
 * curTask -> Lisat of Objects now. Now need to destructure it's content while comparing. 
 * If key & value are same, as per ES6, you can use shorthand property names to write them only once.
 * 
 */
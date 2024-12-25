/* eslint-disable no-unused-vars */
import { useState } from "react";

/*const users =[
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35},
    {name: "Angles", age: 45}
];*/
 const HookState = ()=>{

   // const [users,setUsers] = useState([]);
   const [users,setUsers] = useState(
    [
        {name: "Alice", age: 25},
        {name: "Bob", age: 30},
        {name: "Charlie", age: 35},
        {name: "Angles", age: 45}
    ]);

    return(
        <>
            <div className="main-div">
            <h1>Users list</h1>
                <ul>
                    {
                        users.map(
                            (curEle,index)=>{
                            return(
                                <li key={index}>
                                {curEle.name} -{curEle.age} years old
                                </li>
                            );
                        })}
                </ul>
            </div>
        </>
    )
}
 export default HookState;
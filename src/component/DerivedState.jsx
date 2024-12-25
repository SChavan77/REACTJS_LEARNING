/* eslint-disable no-unused-vars */
import { useState } from "react";

const DerivedState =()=>{
       const [users,setUsers] = useState(
        [
            {name: "Alice", age: 25},
            {name: "Bob", age: 30},
            {name: "Charlie", age: 35},
            {name: "Angles", age: 45}
        ]);
        console.log(users);

        const userCount=users.length; //DERIVED STATE
        const avgAge = users.reduce((accum,curEle)=>
                        accum+curEle.age,0)/userCount;

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
                <p>Total Users: {userCount}</p>
                <p>Avg Age of Users: {avgAge}</p>
            </div>
        </>
        )
}

export default DerivedState
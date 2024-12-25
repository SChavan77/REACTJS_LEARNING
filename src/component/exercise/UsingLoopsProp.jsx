/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const users =[
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35},
    {name: "Angles", age: 45}
];

export const UsingLoopsProp =()=>{
    return(
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {
                    users.map((currentUser,index)=>(
                        <Series  key={index} user={currentUser}/>
                    ))}
            </ul>
        </div>
    )
}


//Using loops & props
const Series =({user})=>{
   // const {userName, userAge} =user;
    return(
        <li>
        <div className="main-div">
          <p> Name: {user.name} - Age: {user.age} years old </p>
        </div>
        </li>
    )}


const OnlyLoops=()=>{
    return (
        <div className="main-div">
            <ul>
                {
                    users.map((curUser, index)=> {
                        return(
                            <li key={index}>
                                {curUser.name} -{curUser.age} years old
                            </li> 
                            )
                        }
                    )
                }

            </ul>
        </div>
    );
}

export default Series;



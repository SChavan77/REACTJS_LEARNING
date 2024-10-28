import React from "react";

export const App =()=>{
    return (
        <>
            <>
            <MyComponent />
            </>
            <>
            <NetFlixSeries />
            </>
        </>
       
    );
}

function MyComponent(){
    const value="Learning";
    return <p> Hii !! {value}</p>
}


const NetFlixSeries =()=>{ //It's not a function. It's a component. PascalCase
    const name="Sheldon";
    let age=16;
    let canWatch="Not Available";
    if(age>=18) 
        canWatch="Watch Now";
    //or here also we can insert
   const returnGenre =()=>{
        return "Comedy";
    }

    const canWatchFunc =() =>{
        if(age>=18) 
            canWatch="Watch Now";
        return "Not Available";
    }

    return (
    <div>
        <div>
        <img src="/images/Sheldon.jpg" alt="sheldon.jpg" width="40%" height="40%"/>
        </div>
    <h2> Name: {name} </h2>
    <h3> Rating: 8.2</h3>
    <p>lorem</p>
    <p> Genre: {returnGenre()}</p>
    <button>{canWatchFunc()}</button>
  </div>
  );
}



/*const returnGenre =()=>{
    return "Comedy";
}*/

/**
 * 
 * Note: It could be operations, function calls & other JS expressions which produce a value.

 * Dynamic Values:
 To add any variable in the component in JSX, we use `{}` syntax.
 
 Dynamic Expressions:
 JSX allows to write JS expressions inside `{}`.

 Function calls:
 Inside JSX, 
 Eg: Inside NetFlixSeries (JSX), we have another JS call. returnGenre
 * 

 CONDITIONS in JSX:
<button>{age>=18? "Watch Now":"Not Available"}</button>

If complex conditions, 
0 way: do it outside the tags. And return via dynamic value way-canWatch.
<button>{canWatch}</button>

1 way: Encapsulate such logic inside a function. 
Additional benefic, to apply such logic, if it requires some dynamic value to be checked, then we can pass those variables as a paremeter to undergo a logic operations.
 */
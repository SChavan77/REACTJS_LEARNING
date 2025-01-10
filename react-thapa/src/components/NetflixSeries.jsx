
import React from "react";

const NetFlixSeries =()=>{ //NAMED TYPE??
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
//NAMED
export const Header=()=>{
    return (
        <h3>Header Section</h3>
    );
}

export const Footer=()=>{
    return (
        <p>Copyright Footer Section</p>
    );
}

export default NetFlixSeries; //DEFAULT type, MIXED type





/**
 * 
 * 1) DEFAULT
   Default Export: A file can have only one default export. : export default NetFlixSeries;
   Default Import: When importing a def export. you can name the import whatver we like:
                   import NetFlixSeries1 from "./components/NetflixSeries"; in ComponentDemo.jsx file.
                   But best practice is to use the same name.
 
 * 2) NAMED
   Named Export: declare the component as export. A file can have multiple named exports.
   Named Import: mention the import in {} whenever we're importing.
        {Importing name} should be same as export declared component name
        Eg: Header & Footer combined as one .jsx file. here, 2 components export block will come.
        Multiple Named Components from the same component file, we can use it in {} with , 
 
 * 3) MIXED
   Mixed Export: can have 1 default & multiple exports in any file.
   Mixed Import: All named in {}s, default can be imported in a separate line or followed by ','
 * 
 */
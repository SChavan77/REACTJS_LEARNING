/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
import React from "react";
/*export const App =()=>{
  return <h1> Hello! Sushmitha </h1>
}
console.log(React.createElement("h1",null, "Hello! Sushmitha"));*/


export const App =()=>{
 return (
   /* <div>
      <NetFlixSeries /> 
      <NetFlixSeries />
      <NetFlixSeries />
    </div>*/
   // [<NetFlixSeries key="1"/>,<NetFlixSeries key="2"/>,<NetFlixSeries key="3"/> ] 
   <React.Fragment>
      <NetFlixSeries /> 
      <NetFlixSeries />
      <NetFlixSeries />
   </React.Fragment>
  ) ; //don't use curly braces.
} //Components are void elements, no attributes


const NetFlixSeries =()=>{ //It's not a function. It's a component. PascalCase
  return (
  <div>
  <div>
    <img src="/images/Sheldon.jpg" alt="sheldon.jpg" width="40%" height="40%"/>
  </div>
  <h2> Name: Sheldon </h2>
  <h3> Rating: 8.2</h3>
  <p>lorem</p>
</div>
);

}

/*Attributes of HTML= props in React
Internally happens: return React.createElement("h1",null, "Hello! Sushmitha"); //null-no prop currently
For non-clsing tags like <img. we need to explicitly close.*/


/**
 * return Statement:
 * It will return one element.
 * 
 * If we have multiple elements, then all should be enclosed in parent element & return it.
 * Every jSX tag needs to be closed. You can use self closing tags for elements that don't have children.
 * Eg: <img src="url" />
 * 
 */

/**
 * About REACT:
 * Class Based Components, Functional Components
 * Benefits: Re-usable components
 * Power of Components: 
 *    Reach 16, Fragment introduced.
      <Fragment> or <> (shorthand version)

 Using Fragment, we can return multiple elements wihtout adding extra nodes to the DOM.
      If we see here,
      <div>  <----extra div
      <NetFlixSeries /> 
      <NetFlixSeries />
      <NetFlixSeries />
    </div> <----extra div


  Resolution: Using array: that extra div is removed. Arrays: Hectic
  [<NetFlixSeries key="1"/>,<NetFlixSeries key="2"/>,<NetFlixSeries key="3"/> ] 

  So use Fragment
 */
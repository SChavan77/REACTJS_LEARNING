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
export const App =()=>{
  return <h1> Hello! Sushmitha </h1>
}


export const App2 =()=>{
 return (
    <div>
      <div>
        <img src="qot.jpg"
      </div>
      <h2> Name: Sheldon </h2>
      <h3>Rating: 8.2</h3>
      <p>lorem</p>
    </div>
  ) ;
}



// Attributes of HTML= props in React
//Internally happens: React.createElement("h1",null, "Hello! Sushmitha");

//For non-clsing tags like <img. we need to explicitly close.

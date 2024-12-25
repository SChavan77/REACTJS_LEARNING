/* eslint-disable no-unused-vars */

import './App.css'
// /import HookState  from './component/exercise/HookState.jsx';
import {LiftignStateUp} from './component/LiftingStateUp.jsx';

function App() {
  return (
    <section className='container'>
      {/* <UsingState/> */}
      {/* <Sibling/> */}
      <LiftignStateUp/>
    </section>
  )
}

function Sibling()
{
    console.log("Sibling Component rendered");
    return (
        <div className="main-div">
            <h2>Sibling Component </h2>
        </div>
    )
}
export default App

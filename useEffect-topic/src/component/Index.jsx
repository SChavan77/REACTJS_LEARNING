/* eslint-disable no-unused-vars */
import { useState, useEffect} from 'react'

const Index =()=>{
    const [count, setcount] = useState(0);
    const [name, setName]=useState("");
    
    const handleCounter =()=>{
        setcount(count+1);
    }

    const handleNameChange =(e)=>{
        setName(e.target.value);
    }
  useEffect(()=>{
    console.log(name);
    
  },[name]);

  useEffect(()=>{
    document.title=`Count : ${count}`
  },[count])


  useEffect(()=>{
    console.log(count);
    
  },[count]);

    return (
    <> 
        <h1>   USE EFFECT CHALLENGE  </h1>
        <p>Count: {count}</p>
        <button type="submit" onClick={handleCounter}>Counter</button>
        <input type="text" name="username" id="username" 
                value={name} onChange={handleNameChange} 
                autoComplete="off" required />
          <p> Name : <span> {name}</span></p>
    </>
    );
}

export default Index;
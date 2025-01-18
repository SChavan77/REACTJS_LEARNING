/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './Pokemon.css'

const HowToFetchApi = ()=>{


    const [apiData,setapiData]=useState([]);

    //Dependency set here makes this code to run only once in the beginning.
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
             .then((res)=> res.json())
             // eslint-disable-next-line no-unused-vars
             .then((data)=>
                {
                    setapiData(data)
                }) //casues too many requests
             .catch((err)=>console.log("Error : "+ err));
    },[])
    
    return (
        <div className='container effect-container'>
            <ul>data: 
                    {
                        apiData.map((curData)=>
                            {
                                return <li key={curData.id}> {curData.body} </li>
                            })}
            </ul>
        </div>
    )
}

export default HowToFetchApi;
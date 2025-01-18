/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './Pokemon.css'

const HowNotToFetchApi = ()=>{

    const [apiData,setapiData]=useState([]);

    fetch("https://jsonplaceholder.typicode.com/posts")
             .then((res)=> res.json())
             // eslint-disable-next-line no-unused-vars
             .then((data)=>
                {
                    /*setapiData(data)*/ 
                }) //casues too many requests
             .catch((err)=>console.log("Error : "+ err));
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

export default HowNotToFetchApi;
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './Pokemon.css'

const Pikachu =()=>{
    const [apiData,setapiData]=useState(null);
    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

    const [loading,setLoading] =useState(true);
    const[error,setError]=useState("");

    //METHOD 1: Fetch
    const fetchPokemon =()=>{
        fetch(API)
        .then((res)=>res.json())
        .then((data)=>{
            setapiData(data);
            setLoading(false); //after fetching, updating, loading should stop
        })
        .catch((error)=> {
            console.log("Error : "+ error);
            setError(error);
            setLoading(true);
        })
    }

    //METHOD 2: ASYNC-AWAIT: Promise
    const asyncFetchPokemon = async ()=>{
        try{
            const response = await fetch(API); //No chaining is required. Need to wait until we get the full fetch data
            const jsonResponse = await response.json();
            setapiData(jsonResponse);
            setLoading(false);
        }
        catch(error){
            console.log(error);
            setError(error);
            setLoading(true);
        }
    }

        //Dependency set here makes this code to run only once in the beginning.
        useEffect(()=>{
           // fetchPokemon();
           asyncFetchPokemon();
        },[])

        if(apiData)
            console.log(apiData);
        

        //https://pokeapi.co/api/v2/pokemon/pikachu response is not an array data so removed .map
        //if(!apiData){
        if(loading)
            return (
                <div>
                    <h1> Loading....</h1>
                </div>
            )
        
        if(error) //While loading if any error comes
            return (
                <div>
                    <h1> Page Error.... {error.message}</h1>
                    {/*Example: Error : TypeError: Failed to fetch*/}
                </div>
            )
        
        //if(apiData){
            return (
                <section className='container'>
                   <header>
                        <h1> Lets catch Pokemon</h1>
                   </header>
                   <ul className='card-demo'>
                        <li className='pokemon-card'>
                            <figure>
                                <img 
                                src={apiData.sprites.other.dream_world.front_default} 
                                alt={apiData.name}
                                className='pokemon-image'
                                />
                            </figure>
                            <h1>{apiData.name}</h1>
                        <div className='grid-three-cols'>
                            <p className='pokemon-info'>
                                Height: <span>{apiData.height}</span>
                            </p>
                            <p className='pokemon-info'>
                                Weight: <span>{apiData.weight}</span>
                            </p>
                            <p className='pokemon-info'>
                                Speed: <span>{apiData.stats[5].base_stat}</span>
                            </p>
                        </div>
                        </li>
                   </ul>
                </section>
            )
       // }
}

export default Pikachu;
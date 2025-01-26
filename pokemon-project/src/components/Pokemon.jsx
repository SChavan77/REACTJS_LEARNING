/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import '../index.css'
import {PokemonCards} from './PokemonCards.jsx';

const Pokemon = ()=>{
    const [pokemon,setPokemon]=useState([]);
    const [err,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    const [search, setSearch]=useState(""); //null not suggested

    const API ="https://pokeapi.co/api/v2/pokemon?limit=24" ;

    const fetchPokemon = async ()=>{
       try{
        const res = await fetch(API);
        const jsonRes= await res.json();
        console.log(jsonRes);
        const detailedPokemonData= jsonRes.results.map(async (curPokemon)=>{
                const res= await fetch(curPokemon.url);
                const data =await res.json();
                //console.log(data);
                return data;
            });
            const detailedResponse = await Promise.all(detailedPokemonData);
            //console.log(detailedResponse); 
            setPokemon(detailedResponse);
            setLoading(false);
        }        
       catch(error){
        console.log("Error: " +error);
        setLoading(false);
        setError(error);
       }
    }

    useEffect(()=>{
        fetchPokemon();
    },[]);

    const searchDate = pokemon.filter((curPokemon)=>
                         curPokemon.name.toLowerCase().includes(search.toLowerCase()))

    if(loading){
        return(
            <div>
                <h1>Loading.....</h1>
            </div>
        );
    }

    if(err){
        return (
            <div>
                <h1>Error : {err.message}</h1>
            </div>
        );
    }

    return (
        <>
        <section className='container'>
        <header>
            <h1> Lets catch Pokemon</h1>
        </header>
        <div className='pokemon-search'>
            <input type="text" placeholder='search Pokemon' value={search} onChange={(e)=>setSearch(e.target.value)}/>

        </div>
        <div>
            <ul className='cards'>
                {
                    searchDate.map((curPokemon)=>{
                       // return <li key={curPokemon.id}> {curPokemon.name} </li>;
                       return <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />;
                })}
            </ul>
        </div>
        </section>
        </>
    )
}
export default Pokemon;
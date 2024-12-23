import React from "react";
import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard.jsx";
import './Netflix.css';

/*const NetflixSeries =()=>{ 
    return (
    <ul>
    {
      seriesData.map((curSeries) => {
         return (
      <li key={curSeries.id}>
      <div>
          <img src={curSeries.img_url} alt={curSeries.id} width="40%" height="40%"/>
      </div>
      <h2> Name: {curSeries.name} </h2>
      <h3> Rating: {curSeries.rating}</h3>
      <p>Summary: {curSeries.description}</p>
      <p> Genre:{curSeries.genre}</p>
      <p>Cast: {curSeries.cast}</p>
      <a href={curSeries.watch_url} target="_blank">
        <button> Watch Now </button>
      </a>
    </li>
         );
      })};
  </ul>
  );
};


/*const NetflixSeries =()=> { 
  return (
  <ul>
  {
    seriesData.map((curSeries) => {
        return <SeriesCard key= {curSeries.id} curEle ={curSeries}/>;
    })}
</ul>
);
};
export default NetflixSeries;*/

const NetFlixSeries = () => {
    return (
        <ul className="grid grid-three--cols" >
            {seriesData.map((currentElement) => (
                <SeriesCard key={currentElement.id} series={currentElement} />
            ))}
        </ul>
    );
};
export default NetFlixSeries;

/**
 * keys to different each elements. It's like a prop
 * 
 * <li>
          <div>
          <img src={seriesData[0].img_url} alt={seriesData[0].id} width="40%" height="40%"/>
      </div>
      <h2> Name: {seriesData[0].name} </h2>
      <h3> Rating: {seriesData[0].rating}</h3>
      <p>Summary: {seriesData[0].description}</p>
      <p> Genre:{seriesData[0].genre}</p>
      <p>Cast: {seriesData[0].cast}</p>
      <a href={seriesData[0].watch_url} target="_blank">
        <button> Watch Now </button>
      </a>
    </li>
 */
  
/*
   <ul class="grid grid-three--cols" >

    We can't use this directly.
    We get, 
  
    chunk-373CG7ZK.js?v=57765123:519 Warning: Invalid DOM property `class`. Did you mean `className`?
    at ul
    at NetFlixSeries
    at App

    Because, class is a reserved keyword in React
*/
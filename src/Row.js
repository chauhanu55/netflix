import React, {useEffect, useState} from 'react';
import axios  from "./axios";
import "./row.css";

function Row(props) {
    const img_full_path = "https://image.tmdb.org/t/p/original";
    const [Movies, setMoives]= useState([]);


    useEffect(()=>{
        axios.get(props.endpoint).then((result)=>{
            
        
        console.log(result.data.results);
        setMoives(result.data.results);
    });
    }, []);

  return (
    <>
    <div className="body">
    <div className={props.isBigger ? "rows bigger" : "rows"}>
      <h1>{props.heading}</h1>
      <div className="movies">
        {Movies.map((movie, index) => {
          return (
            <img
              key={index}
              src={img_full_path + movie.poster_path}
              alt={movie.title}
            />
          );
        })}
      </div>
    </div>
    </div>
    </>
  );
}

export default Row
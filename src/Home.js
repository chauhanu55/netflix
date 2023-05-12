import React from "react";
import Row from "./Row";
import requests from "./requests";
import Navbar from "./Navbar";
import Banner from "./Banner";



function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Row endpoint = {requests.fetchNetflixOriginals} heading ="Netflix Originals"
        isBigger={true}/>
       <Row endpoint ={requests.fetchTrending} heading="Trending Moives"/> 
       <Row endpoint ={requests.fetchTopRated} heading="Top Rated Moives"/> 
       <Row endpoint ={requests.fetchActionMovies} heading="Action Moives"/> 
       <Row endpoint ={requests.fetchComedyMovies} heading="Comedy Moives"/> 
       <Row endpoint ={requests.fetchHorrorMovies} heading="Horror Moives"/> 
       <Row endpoint ={requests.fetchRomanceMovies} heading="Romantic Moives"/> 
       <Row endpoint ={requests.fetchDocumentaries} heading="Documentaries"/> 
    </>
  );
}

export default Home
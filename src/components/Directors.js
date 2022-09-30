import React from "react";
import { directors } from "../data";

function Directors() {
  const directorDetails = directors.map(director => {
    return(
      <div key={director.name}>
        <h2>Name: {director.name}</h2>
        <p>Movies: </p>
        <ul>
          { director.movies.map((movie, index) =>{ return (<li key={index}>{movie}</li>)}) }
        </ul>
      </div>
    )
  })

  return (
    <div>
     {/*{code here}*/}
     <h1>Directors Page</h1>
     {directorDetails}
    </div>
    );
}

export default Directors;

import React from "react";
import { actors } from "../data";

function Actors() {
  const actorDetails = actors.map(actor => {
    return (
      <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        <p>Movies: </p>
        <ul>
        { actor.movies.map((movie, index) => { return (<li key={index}>{movie}</li>)})}
        </ul>
      </div>
    )
  })
  return (
  <div>
    {/*{code here}*/}
    <h1>Actors Page</h1>
    {actorDetails}
  </div>
  );
}

export default Actors;

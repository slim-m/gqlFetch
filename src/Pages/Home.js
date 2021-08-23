import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

function Home() {
  const [citySearched, setCitySearched] = useState("");
  const [getWeather, { data, error }] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: { name: citySearched },
  });

  if (error) return <h1> Error found</h1>;

  if (data) {
    console.log(data);
  }

  return (
    <div className="home">
      <h1>Search For Weather</h1>
      <input
        type="text"
        placeholder="City name..."
        onChange={(event) => {
          setCitySearched(event.target.value);
        }}
      />
      <button onClick={() => getWeather()}> Search</button>
      <div className="weather">
        {data && (
          <>
            <h1> {data.films.name} </h1>
            

          </>
          
          
        )}
      </div>
    </div>
  );
}

export default Home;

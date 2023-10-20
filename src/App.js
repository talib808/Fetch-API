import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const apiKey = "55dbfb0";
    const movieID = "tt3896198";

    
    axios
      .get(`http://www.omdbapi.com/?i=${movieID}&apikey=${apiKey}`)
      .then((response) => {
        setMovieData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      {movieData && (
        <div>
          <h1>{movieData.Title}</h1>
          <p>Director: {movieData.Director}</p>
          {movieData.Website && (
            <p>
              <a
                href={movieData.Website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

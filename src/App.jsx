import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import "./App.css";
import { MdSearch } from "react-icons/md";
import { axiosInstance } from "./axios";

const API_KEY = "52255c32f1d69164c6735567d1b4ba6e";
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMovies = async (endpoint) => {
    try {
      const response = await axiosInstance.get(
        `${endpoint}`
      );
      const { results } = response.data;
      setMovies(results);
    } catch (error) {
      console.error("Error fetching the movies: ", error);
    }
  };

  useEffect(() => {
    if (search === "") {
      // If search is empty, fetch all movies
      fetchMovies(`/discover/movie?api_key=${API_KEY}`);
    } else {
      // If search is not empty, fetch movies based on search query
      fetchMovies(`/search/movie?api_key=${API_KEY}&query=${search}`);
    }
  }, [search]);
  return (
    <main>
      <section className="main">
        <h2>MovieLand</h2>

        <div className="search-container">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchBar"
            placeholder="Search..."
          />

          <MdSearch
            fontSize={30}
            className="icon"
            onClick={() => fetchMovies(setSearch)}
          />
        </div>
      </section>

      {movies.length ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <MovieCard movies={movies} />
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </main>
  );
}

export default App;

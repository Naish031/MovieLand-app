import React from "react";
import "./App.css";

const MovieCard = ({ movies }) => {
  return (
    <>
      {movies?.map((movie, index) => {
        return (
          <section className="movies-section" key={index}>
            <div className="movies-container">
              <img
                src={
                  movie
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/placeholderImage.png"
                }
                alt={movie.title}
                className="movieImage"
              />
              <div className="bio-container">
                <h3 className="title">{movie.title}</h3>
                <p className="overview">
                  {movie.overview.slice(0, 100) + "..."}
                </p>
                <p className="release-date">
                  Release Date: <strong>{movie.release_date}</strong>
                </p>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default MovieCard;

/* Import React Hooks
===================== */
import { useEffect, useState } from "react";

/* Import React Components
========================== */
import MovieCard from "./MovieCard";
import Loading from "./Loading";

/* Import API Requirements
=============== */
import axios from "axios";
import { API_KEY } from "../helpers/api";

function SearchResults({ query }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
        )
        .then((res) => {
          setLoading(false);
          setError(false);
          setResults(res.data.results);
        })
        .catch((err) => {
          setError(true);
          console.error(err);
        });
    }
  }, [query]);

  return (
    <div className="movies-view">
      {!query ? (
        <center>
          <p>Make sure you provide a valid search text.</p>
        </center>
      ) : loading ? (
        <center>
          <Loading />
        </center>
      ) : error ? (
        <center>
          <p>Somthing went wrong. PLease try again later.</p>
        </center>
      ) : results.length > 0 ? (
        <main>
          <h1>Search results for "{query}"</h1>
          <div className="movies-grid">
            {results.map((movie, i) => (
              <MovieCard key={i} movie={movie} />
            ))}
          </div>
        </main>
      ) : (
        <center>No movies</center>
      )}
    </div>
  );
}

export default SearchResults;

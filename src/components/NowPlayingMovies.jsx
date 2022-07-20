import { useEffect, useState } from "react";

/* Import API Requirements
=============== */
import axios from "axios";
import { API_KEY } from "../helpers/api";

import MovieCard from "./MovieCard";
import Loading from "../components/Loading";

function NowPlayingMovies() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        setLoading(false);
        setError(false);
        setNowPlayingMovies(res.data.results);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, []);

  return (
    <div className="movies-view">
      {loading ? (
        <center>
          <Loading />
        </center>
      ) : error ? (
        <center>Error</center>
      ) : nowPlayingMovies.length > 0 ? (
        <main>
          <h1>Now Playing Movies</h1>
          <div className="movies-grid">
            {nowPlayingMovies.map((movie, i) => (
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

export default NowPlayingMovies;

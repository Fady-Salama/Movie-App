import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import axios from "axios";
import { API_KEY } from "../helpers/api";
import { useEffect, useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);

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

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        setLoading(false);
        setError(false);
        setTopMovies(res.data.results);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        setLoading(false);
        setError(false);
        setUpComingMovies(res.data.results);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, []);

  return (
    <center className="home-page">
      <h1>Movies8</h1>
      <div className="navigation">
        <Link to="/movies/top" className="link">
          Top Movies
        </Link>
        <Link to="/movies/upcoming" className="link">
          Upcoming Movies
        </Link>
        <Link to="/movies/now-playing" className="link">
          Now Playing Movies
        </Link>
      </div>

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

      <div className="movies-view">
        {loading ? (
          <center>
            <Loading />
          </center>
        ) : error ? (
          <center>Error</center>
        ) : topMovies.length > 0 ? (
          <main>
            <h1>Top Movies</h1>
            <div className="movies-grid">
              {topMovies.map((movie, i) => (
                <MovieCard key={i} movie={movie} />
              ))}
            </div>
          </main>
        ) : (
          <center>No movies</center>
        )}
      </div>

      <div className="movies-view">
        {loading ? (
          <center>
            <Loading />
          </center>
        ) : error ? (
          <center>Error</center>
        ) : upComingMovies.length > 0 ? (
          <main>
            <h1>Upcoming Movies</h1>
            <div className="movies-grid">
              {upComingMovies.map((movie, i) => (
                <MovieCard key={i} movie={movie} />
              ))}
            </div>
          </main>
        ) : (
          <center>No movies</center>
        )}
      </div>
    </center>
  );
}

export default Home;

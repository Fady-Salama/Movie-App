import { useEffect, useState } from "react";
/* Importing Icons
================== */
import { BsStar } from "react-icons/bs";

function MovieCard({ movie }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem("fav-list"));

    if (favList?.filter((m) => m.id === movie.id).length > 0) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, []);

  const addToFavourite = () => {
    const favList = JSON.parse(localStorage.getItem("fav-list"));

    if (!favList) {
      console.log("not found");
      localStorage.setItem("fav-list", JSON.stringify([movie]));
    } else {
      if (favList.filter((m) => m.id === movie.id).length > 0) {
        if (
          window.confirm(
            "Movie already in favoutire. Do you want to remove it from the list ?"
          )
        ) {
          localStorage.setItem(
            "fav-list",
            JSON.stringify(favList.filter((m) => m.id !== movie.id))
          );
          setIsFav(false);
        }
      } else {
        favList.push(movie);
        setIsFav(true);
        localStorage.setItem("fav-list", JSON.stringify(favList));
      }
    }
  };

  return (
    <div className={`movie-card ${isFav ? "fav" : ""}`}>
      <div className="movie-poster">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : ""
          }
          alt=""
        />
      </div>
      <div className="movie-info">
        <p className="movie-info-date">{movie.release_date}</p>
        <p className="movie-info-name">{movie.title}</p>
      </div>
      <button id="add-to-fav" onClick={() => addToFavourite(movie)}>
        <BsStar />
      </button>
    </div>
  );
}

export default MovieCard;

import React from "react";

import { BsFillPlayFill } from "react-icons/bs";
import { CgRemove } from "react-icons/cg";

function FavMovie({ movie, update }) {
  const removeFromFav = () => {
    const favList = JSON.parse(localStorage.getItem("fav-list"));

    const filteredList = favList.filter((m) => m.id !== movie.id);

    localStorage.setItem("fav-list", JSON.stringify(filteredList));
    update(filteredList);
  };
  return (
    <div className="fav-movie-card">
      <div className="poster">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : ""
          }
          alt=""
        />
      </div>
      <div className="info">
        <div className="text">
          <p className="date">{movie.release_date}</p>
          <p className="name">{movie.title}</p>
        </div>
        <div className="action">
          <button id="play">
            <BsFillPlayFill /> Watch
          </button>
          <button id="remove" onClick={removeFromFav}>
            <CgRemove /> Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavMovie;

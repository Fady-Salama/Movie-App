import React, { useEffect, useState } from "react";

import { IoIosArrowRoundBack } from "react-icons/io";

import { Link } from "react-router-dom";
import FavMovie from "../components/FavMovie";

function FavPage() {
  const [favList, setfavList] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("fav-list"));

    if (favList) {
      setfavList(list);
    }
  }, []);
  return (
    <div className="fav-movie-list">
      <Link to="/" id="back">
        <IoIosArrowRoundBack />
      </Link>
      <h1 className="fav-movie-list-head">Your Favourites List</h1>

      {favList?.length > 0 ? (
        <div className="fav-movie-grid">
          {favList.map((movie, i) => (
            <FavMovie update={setfavList} key={i} movie={movie} />
          ))}
        </div>
      ) : (
        <center>
          <p>There are no movies in your favourits list.</p>
        </center>
      )}
    </div>
  );
}

export default FavPage;

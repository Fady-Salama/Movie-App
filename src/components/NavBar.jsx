/* Importing React Hooks
======================== */
import { useEffect } from "react";

/* React-Router-DOM Imports
=========================== */
import { NavLink, useNavigate } from "react-router-dom";

/* Importing Icons
================== */
import { GoSearch } from "react-icons/go";

function NavBar({ setSearchText, searchText }) {
  const naviagte = useNavigate();

  useEffect(() => {
    setSearchText("");
  }, []);

  const searchFormSubmit = (e) => {
    e.preventDefault();
    setSearchText(e.target[0].value);
    naviagte("/results");
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="nav-links">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/movies/top"
          >
            Top Movies
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/movies/upcoming"
          >
            Upcoming Movies
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/movies/now-playing"
          >
            Now Playing Movies
          </NavLink>
        </div>
        <form className="nav-search" onSubmit={(e) => searchFormSubmit(e)}>
          <input
            required
            type="text"
            placeholder="Search for movies ..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button id="search" type="submit">
            <GoSearch /> Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;

/* Import React Hooks
===================== */
import { useState } from "react";

/* Importings from React-Router-DOM
=================================== */
import { Routes, Route } from "react-router-dom";

/* My React Components
====================== */
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import TopMovies from "./components/TopMovies";
import UpComingMovies from "./components/UpComingMovies";
import NowPlayingMovies from "./components/NowPlayingMovies";
import SearchResults from "./components/SearchResults";

import FavPage from "./pages/FavPage";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />

        <Route
          path={"/"}
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path={"/movies/top"}
          element={
            <>
              <NavBar setSearchText={setSearchText} searchText={searchText} />
              <TopMovies />
            </>
          }
        />
        <Route
          path={"/movies/upcoming"}
          element={
            <>
              <NavBar setSearchText={setSearchText} searchText={searchText} />
              <UpComingMovies />
            </>
          }
        />
        <Route
          path={"/movies/now-playing"}
          element={
            <>
              <NavBar setSearchText={setSearchText} searchText={searchText} />
              <NowPlayingMovies />
            </>
          }
        />
        <Route
          path="/results"
          element={
            <>
              <NavBar setSearchText={setSearchText} searchText={searchText} />
              <SearchResults query={searchText} />
            </>
          }
        />
        <Route path="/favourites" element={<FavPage query={searchText} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

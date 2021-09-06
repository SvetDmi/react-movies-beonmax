import React from "react";
import { MoviesList } from "../components/MoviesList.jsx";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
import { getMovies } from "../utils/api";

function Main() {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getMovies("matrix", "all")
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    getMovies(str, type)
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <main className="container content">
      <Search onSearch={searchMovies} />
      {loading ? <Preloader /> : <MoviesList movies={movies} />}
    </main>
  );
}
export { Main };

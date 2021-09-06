import { Movie } from "./Movie";

function MoviesList(props) {
  const { movies = [] } = props;
  return (
    <ul className="cardList">
      {movies.length ? (
        movies.map((movie) => (
          <Movie
            key={movie.imdbID}
            // {...movie}
            title={movie.Title}
            poster={movie.Poster}
            type={movie.Type}
            year={movie.Year}
          />
        ))
      ) : (
        <h4>Ничего не найдено</h4>
      )}
    </ul>
  );
}

export { MoviesList };

import { NewMovieField } from "./components/addMovieField";
import { MovieItem } from "./components/movieItem";

function App() {
  let movieList = [];

  const addMovieHandler = (movie) => {
    movieList.push(movie);
    console.log(movieList);
  };

  return (
    <>
      <NewMovieField onAddMovie={addMovieHandler} />
      <MovieItem />
    </>
  );
}

export default App;

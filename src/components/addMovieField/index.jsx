import { AddMovie } from "../addMovieForm";

const NewMovieField = (props) => {
  let id = 0;

  const saveNewMovieHandler = (newMovieData) => {
    const movieData = {
      ...newMovieData,
      id: (id + 1).toString(),
    };
    props.onAddMovie(movieData);
  };

  return (
    <div>
      <AddMovie onSaveNewMovie={saveNewMovieHandler} />
    </div>
  );
};

export { NewMovieField };

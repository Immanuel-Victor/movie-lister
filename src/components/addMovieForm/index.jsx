import React, { useState } from "react";

const AddMovie = (props) => {
  const [enteredValue, setEnteredValue] = useState({
    tituloUsuario: "",
    sinopseUsuario: "",
  });

  const userTitleInputHandler = (event) => {
    setEnteredValue((previousState) => {
      return {
        ...previousState,
        tituloUsuario: event.target.value,
      };
    });
  };

  const userSinopseInputHandler = (event) => {
    setEnteredValue((previousState) => {
      return {
        ...previousState,
        sinopseUsuario: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const movieData = {
      titulo: enteredValue.tituloUsuario,
      sinopse: enteredValue.sinopseUsuario,
    };

    props.onSaveNewMovie(movieData)
    setEnteredValue({
      tituloUsuario: "",
      sinopseUsuario: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Titulo:</label>
        <input
          type="text"
          placeholder="Insira o título do filme"
          value={enteredValue.tituloUsuario}
          onChange={userTitleInputHandler}
        ></input>
      </div>
      <div>
        <label>Sinopse</label>
        <textarea
          placeholder="Insira a sinopse do filme"
          value={enteredValue.sinopseUsuario}
          onChange={userSinopseInputHandler}
        ></textarea>
      </div>
      <button type="submit">Inserir Filme</button>
    </form>
  );
};

export { AddMovie };

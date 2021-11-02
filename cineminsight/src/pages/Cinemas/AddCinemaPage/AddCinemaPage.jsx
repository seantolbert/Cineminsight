import React, { useState, useRef, useEffect } from "react";


const genreList = [
  "Select Genre",
  "Sci-Fi",
  "Drama",
  "Action",
  "Comedy",
  "Western",
  "Anime",
  "Historical",
  "Documentary",
  "Educational",
  "RomCom",
  "Mystery",
  "Thriller",
  "Fantasy",
  "Crime",
  "Horror",
  "Stupid",
];

export default function AddCinemaPage({ handleAddCinema }) {
  const [invalidForm, setValidForm] = useState(true);
  const [newCinema, setNewCinema] = useState({
    title: "",
    genre: "",
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCinema(newCinema);
    setNewCinema(newCinema);
  };

  const handleChange = (e) => {
    setNewCinema({
      ...newCinema,
      [e.target.name]: e.target.value,
    });
  };



  return (
    <>
      <h1>Add Game</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Game Title</label>
          <input
            name="title"
            value={newCinema.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Game Genre</label>
          <select
            name="genre"
            value={newCinema.genre}
            onChange={handleChange}
            required
          >
            {genreList.map((genre) => {
              return <option value={genre}>{genre}</option>;
            })}
          </select>
        </div>
        <button type="submit" disabled={invalidForm}>
          ADD Cinema
        </button>
      </form>
    </>
  );
}

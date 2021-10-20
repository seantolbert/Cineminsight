import React, { useState, useRef, useEffect } from "react";

const genreList = [
  "Sci-Fi",
  "Drama",
  "Action",
  "Comedy",
  "Western",
  "Anime",
  "Rom-Com",
  "Mystery",
  "Thriller",
  "Fantasy",
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
  });

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
    <main>
      <div>AddCinemaPage</div>
      <h1>Add New Cinema</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Cinema Title</label>
          <input
            name="title"
            value={newCinema.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Cinema Genre</label>
          <select name="genre" value={newCinema.genre} onChange={handleChange}>
            {genreList.map((genre) => {
              return <option value={genre}>{genre}</option>;
            })}
          </select>
        </div>
        <button type="submit" disabled={invalidForm}>
          Add Cinema
        </button>
      </form>
    </main>
  );
}

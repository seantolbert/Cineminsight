import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

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

export default function EditCinemaPage({ handleUpdateCinema }) {
  const location = useLocation();
  const [invalidForm, setValidForm] = useState(true);
  const [editedCinema, setEditedCinema] = useState(location.state.cinemaItem);
  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [editedCinema]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateCinema(editedCinema);
  };

  const handleChange = (e) => {
    setEditedCinema({
      ...editedCinema,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <div>EditCinemaPage</div>
      <h1>Edit Cinema</h1>
      <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            name="title"
            value={editedCinema.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Genre</label>
          <select name="genre" value={editedCinema.genre} onChange={handleChange}>
            {genreList.map((genre) => {
              return <option value={genre}>{genre}</option>;
            })}
          </select>
        </div>
        <button type="submit" disabled={invalidForm}>
          Save Changes
        </button>
        &nbsp;&nbsp;
        <Link to="/cinemas">
          <button>Cancel</button>
        </Link>
      </form>
    </main>
  );
}

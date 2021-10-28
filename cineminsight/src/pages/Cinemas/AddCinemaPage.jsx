import React, { useState, useRef, useEffect } from "react";

const genreList = [
  "Sci-Fi",
  "Drama",
  "Action",
  "Comedy",
  "Western",
  "Anime",
  "RomCom",
  "Mystery",
  "Thriller",
  "Fantasy",
  "Crime",
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
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add a Cinema
            </h3>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Cinema Title
                    </label>
                    <input
                      name="title"
                      value={newCinema.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label>Cinema Genre</label>
                  <select
                    name="genre"
                    value={newCinema.genre}
                    onChange={handleChange}
                  >
                    {genreList.map((genre) => {
                      return <option value={genre}>{genre}</option>;
                    })}
                  </select>
                </div>
              </div>
              <button type="submit" disabled={invalidForm}>
                Add Cinema
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

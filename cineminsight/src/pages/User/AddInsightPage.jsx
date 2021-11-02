import React, { useState, useRef, useEffect } from "react";

const ratingList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default function AddInsightPage({ handleAddInsight, cinemas, user }) {
  const [invalidForm, setValidForm] = useState(true);
  const [newInsight, setNewInsight] = useState({
    cinema: cinemas[0].title,
    rating: "1",
    review: "",
    user: user,
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddInsight(newInsight);
    setNewInsight(newInsight);
  };

  const handleChange = (e) => {
    setNewInsight({
      ...newInsight,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <h1>Add Insight</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Cinema</label>
          <select
            name="cinema"
            value={newInsight.cinema}
            onChange={handleChange}
            required
          >
            {cinemas.map((cinema) => {
              return <option value={cinema.title}>{cinema.title}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Rating</label>
          <select
            name="rating"
            value={newInsight.rating}
            onChange={handleChange}
            required
          >
            {ratingList.map((rating) => {
              return <option value={rating}>{rating}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Review</label>
          <textarea
            name="review"
            value={newInsight.review}
            onChange={handleChange}
            cols="30"
            rows="10"
          />
        </div>
        <input type="hidden" name="user" value={newInsight.user} />
        <button type="submit" disabled={invalidForm}>
          Add Log
        </button>
      </form>
    </main>
  );
}

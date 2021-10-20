import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const ratingList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default function EditInsightPage({ handleUpdateInsight, cinemas }) {
  const location = useLocation();
  const [invalidForm, setValidForm] = useState(true);
  const [editedInsight, setEditedInsight] = useState(
    location.state.insightItem
  );
  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [editedInsight]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateInsight(editedInsight);
  };

  const handleChange = (e) => {
    setEditedInsight({
      ...editedInsight,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <h1>Edit Insight</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Cinema</label>
          <select
            name="game"
            value={editedInsight.game}
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
            value={editedInsight.rating}
            onChange={handleChange}
            required
          >
            {ratingList.map((rating) => {
              return <option value={rating}>{rating}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Review:</label>
          <textarea
            name="review"
            value={editedInsight.review}
            onChange={handleChange}
          />
        </div>
        <input type="hidden" name="user" value={editedInsight.user} />
        <button type="submit" disabled={invalidForm}>
          EDIT Insight
        </button>
        &nbsp;&nbsp;
        <Link to="/user">
          <button>CANCEL</button>
        </Link>
      </form>
    </main>
  );
}

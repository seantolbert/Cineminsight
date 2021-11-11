import { Link } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";

export default function CinemaCard({ cinema, handleDeleteCinema }) {
  return (
    <>
      <p>
        <strong>Title: {cinema.title}</strong>
      </p>
      <p>
        <strong>Genre: {cinema.genre}</strong>
      </p>
      <hr />
      <Button
        variant="danger"
        style={{ marginRight: 10 }}
        onClick={() => handleDeleteCinema(cinema._id)}
      >
        Delete
      </Button>
      <Link to="/cinemas">
        <Button>Return to List</Button>
      </Link>
    </>
  );
}

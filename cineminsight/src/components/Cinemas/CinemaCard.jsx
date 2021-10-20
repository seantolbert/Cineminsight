import { Link } from "react-router-dom";
import React from 'react'

export default function CinemaCard ({ cinema }) {
  return (
    <div>
      <h3>{cinema.title}</h3>
      <p>{cinema.genre}</p>
      <div>
        <Link to="/cinemas">
          <button>Return to List</button>
        </Link>
      </div>
    </div>
  );
}

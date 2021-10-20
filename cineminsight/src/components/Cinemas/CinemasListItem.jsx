import React from "react";
import { Link } from "react-router-dom";

export default function CinemasListItem({ cinemaItem }) {
  return (
    <div>
      <p>
        <strong>{cinemaItem.title}</strong> &nbsp; &nbsp; &nbsp;
        <strong>{cinemaItem.genre}</strong>
      </p>
      <Link 
        to={{
          pathname: '/cinema-details', 
          state: {cinemaItem}
          }}>
        <button>Details</button>
      </Link>
      <hr />
      <Link
        to={{
          pathname: "/edit",
          state: { cinemaItem },
        }}
      >
        <button>Edit</button>
      </Link>
      <hr />
    </div>
  );
}

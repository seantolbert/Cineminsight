import React from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function CinemasListItem({ cinemaItem }) {
  return (
    <>
      <Alert>
        <strong>{cinemaItem.title}</strong> &nbsp; &nbsp; &nbsp;
        <strong>{cinemaItem.genre}</strong>
        <hr />
        <Link
        style={{marginRight: 10}}
          to={{
            pathname: "/cinema-details",
            state: { cinemaItem },
          }}
        >
          <Button>Details</Button>
        </Link>
        <Link
          to={{
            pathname: "/edit",
            state: { cinemaItem },
          }}
        >
          <Button>Edit</Button>
        </Link>
      </Alert>
    </>
  );
}

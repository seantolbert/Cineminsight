import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <>
      <Container fluid style={{ marginTop: 50 }}>
        <Row>
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <h1>Edit Cinema</h1>
            <Form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Cinema Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={editedCinema.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Genre</Form.Label>
                <Form.Select
                  name="genre"
                  value={editedCinema.genre}
                  onChange={handleChange}
                  required
                >
                  {genreList.map((genre) => {
                    return <option value={genre}>{genre}</option>;
                  })}
                </Form.Select>
              </Form.Group>
              <Button class="button" type="submit" disabled={invalidForm}>
                Update Cinema
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

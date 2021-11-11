import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <>
      <Container fluid style={{ marginTop: 50 }}>
        <Row>
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <h1>Edit Insight</h1>
            <Form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Cinema</Form.Label>
                <Form.Select
                  name="cinema"
                  value={editedInsight.cinema}
                  onChange={handleChange}
                  required
                >
                  {cinemas.map((cinema) => {
                    return <option value={cinema.title}>{cinema.title}</option>;
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Select
                  name="rating"
                  value={editedInsight.rating}
                  onChange={handleChange}
                  required
                >
                  {ratingList.map((rating) => {
                    return <option value={rating}>{rating}</option>;
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Review</Form.Label>
                <Form.Control
                  as="textarea"
                  name="review"
                  value={editedInsight.review}
                  onChange={handleChange}
                  style={{ height: 100 }}
                />
              </Form.Group>
              <Button
                style={{ marginTop: 10 }}
                type="submit"
                disabled={invalidForm}
              >
                Update Insight
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

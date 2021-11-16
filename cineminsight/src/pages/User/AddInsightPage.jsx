import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ratingList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default function AddInsightPage({ handleAddInsight, cinemas, user }) {
  const [invalidForm, setValidForm] = useState(true);
  const [newInsight, setNewInsight] = useState({
    cinema: cinemas[0],
    rating: "1",
    review: "",
    user: user,
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  });

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
    <>
      <Container fluid style={{ marginTop: 50 }}>
        <Row>
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <h1>Add Insight</h1>
            <Form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Cinema</Form.Label>
                <Form.Select
                  name="cinema"
                  value={newInsight.cinema}
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
                  value={newInsight.rating}
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
                  value={newInsight.review}
                  onChange={handleChange}
                  style={{ height: 100 }}
                />
              </Form.Group>
              <Button
                style={{ marginTop: 10 }}
                size="lg"
                type="submit"
                disabled={invalidForm}
              >
                Add Insight
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

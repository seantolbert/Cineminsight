import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LogIn({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  };
  return (
    <>
      <Container fluid style={{ marginTop: 50 }}>
        <Row>
          <Col xs={12} md={{ span: 5, offset: 3 }}>
            <h1>Log In</h1>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={credentials.pasword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button type="submit">Log In</Button>
            </Form>
            <p className="error-message">&nbsp;{error}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

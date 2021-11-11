import SignUpForm from "../../components/User/SignUpForm";
import LoginForm from "../../components/User/LogInForm";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

const AuthPage = ({ setUser }) => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main>
      <Container fluid>
          <Nav style={{ marginTop: 10 }} className="justify-content-center">
            <Nav.Item>
              <Button size="lg" onClick={() => setShowLogin(!showLogin)}>
                {showLogin ? "Sign Up" : "Log In"}
              </Button>
            </Nav.Item>
          </Nav>
        

        {showLogin ? (
          <LoginForm setUser={setUser} />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
      </Container>
    </main>
  );
};

export default AuthPage;

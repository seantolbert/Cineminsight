import SignUpForm from "../../components/User/SignUpForm";
import LoginForm from "../../components/User/LogInForm";
import { useState } from "react";

const AuthPage = ({ setUser }) => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main>
      <div>
        <button onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "Sign Up" : "Log In"}
        </button>
      </div>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
};

export default AuthPage;

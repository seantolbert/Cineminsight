import SignUpForm from '../../components/User/SignUpForm'
import LoginForm from '../../components/User/LogInForm'

const AuthPage = ({setUser}) => {
  return (
    <main>
      <SignUpForm setUser={setUser}/>
      <LoginForm setUser={setUser}/>
    </main>
  );
};

export default AuthPage;
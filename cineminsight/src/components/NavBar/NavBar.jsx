import * as usersService from "../../utilities/users-service";
import { Link } from "react-router-dom";
import Logo from "../../Assets/cineminsight_logo.png";

export default function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    usersService.logOut();
    setUser(null);
  };

  return (
    <nav>
      Welcome, <b>{user.name}</b> &nbsp; | &nbsp;
      <Link to="/cinemas">All Cinemas</Link>
      &nbsp; | &nbsp;
      <Link to="/insights">All Insights</Link>
      &nbsp; | &nbsp;
      <Link to="/user">Profile</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
      &nbsp;
    </nav>
  );
}

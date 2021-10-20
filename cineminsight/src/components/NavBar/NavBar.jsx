import * as usersService from "../../utilities/users-service";
import { Link } from "react-router-dom";

export default function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    usersService.logOut();
    setUser(null);
  };

  return (
    <nav>
      welcome, <b>{user.name}</b>
      <Link to="/cinemas"> All Cinemas</Link>
      &nbsp; | &nbsp;
      <Link to="/insights">All Insights</Link>
      &nbsp; | &nbsp;
      <Link to="/user">Profile</Link>
      &nbsp; | &nbsp;
      <Link onClick={handleLogOut}>Log Out</Link>
      &nbsp;
    </nav>
  );
}

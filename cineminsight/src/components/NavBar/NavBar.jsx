import * as usersService from "../../utilities/users-service";
import { Link } from "react-router-dom";

export default function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    usersService.logOut();
    setUser(null);
  };

  return (
    <nav
      className="flex justify-between items-center h-16 bg-white  relative font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        CINEMINSIGHT
      </Link>
        <p className="p-4">Welcome {user.name}!</p>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link to="/cinemas" className="p-4">
          Cinemas
        </Link>
        <Link to="/insights" className="p-4">
          Insights
        </Link>
        <Link to="/user" className="p-4">
          Profile
        </Link>
        <Link to="" onClick={handleLogOut} className="p-4">
          Log Out
        </Link>
      </div>
    </nav>
  );
}

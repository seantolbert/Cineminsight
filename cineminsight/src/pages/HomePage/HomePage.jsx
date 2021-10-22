import { Link } from "react-router-dom";

export default function HomePage({ user }) {
  return (
    <main>
      <div>HomePage</div>
      welcome <b>{user.name}</b>
      <div>
        Welcome to Cineminsight! <br />
        Get started by adding a TV show or movie you enjoy{" "}
        <Link to="/cinemas">here</Link>
      </div>
    </main>
  );
}

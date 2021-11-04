import { Link } from "react-router-dom";
import PerfectExample from "../../Assets/perfect_example.png";
import Logo from "../../Assets/cineminsight_logo.png";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function HomePage({ user }) {
  return (
    <>
      <main>
        <h1>Welcome To Cineminsight </h1>
        <p>Record your thoughts for your favorite shows and Movies!</p>
        <p>Get started and enjoy!</p>
        <div>
          <div>
            <Button className="me-2" variant="outline-dark">
              <Link style={{ textDecoration: "none" }} to="/cinemas/new">
                Add Cinema
              </Link>
            </Button>
            <Button variant="outline-dark">
              <Link
                style={{ textDecoration: "none" }}
                to="/user/insights/newinsight"
              >
                Create Insight
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <div>
        <Image fluid src={PerfectExample} roundedCircle />
      </div>
    </>
  );
}

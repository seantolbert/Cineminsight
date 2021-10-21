import { Link } from "react-router-dom";

export default function UserInsightDetail({ insight }) {
  return (
    <>
      <div>
        <h3>{insight.cinema}</h3>
      </div>
      <div>
        <h3>{insight.rating}</h3>
      </div>
      <div>
        <h3>{insight.review}</h3>
      </div>
      <hr />
      <div>
        <Link to="/user">
          <button>Return to List</button>
        </Link>
      </div>
    </>
  );
}

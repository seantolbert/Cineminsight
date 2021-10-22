import { Link } from "react-router-dom";

export default function InsightCard({ insightItem }) {
  return (
    <main>
      <div>
        Title: {insightItem.cinema} <br />
        Rating: {insightItem.rating} <br />
        Review: {insightItem.review} <br />
      </div>
      <div>
        <Link
          to={{
            pathname: "user/insights/details",
            state: { insightItem },
          }}
        >
          <button>Details</button>
        </Link>
      </div>
    </main>
  );
}

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function InsightCard({ insightItem }) {
  return (
    <>
      <Alert variant="success" style={{ marginBottom: 20 }}>
        <strong>
          Title: {insightItem.cinema} <br />
        </strong>
        <strong>
          Rating: {insightItem.rating} <br />
        </strong>
        <strong>
          Review: {insightItem.review} <br />
        </strong>
        <div style={{ marginTop: 10 }}>
          <Link
            to={{
              pathname: "user/insights/details",
              state: { insightItem },
            }}
          >
            <Button>Details</Button>
          </Link>
        </div>
      </Alert>
    </>
  );
}

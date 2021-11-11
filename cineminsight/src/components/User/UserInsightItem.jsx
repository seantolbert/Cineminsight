import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function UserInsightItem({ handleDeleteInsight, insightItem }) {
  return (
    <>
      <Alert variant="warning">
        <div>
          <strong>
            {insightItem.cinema} <br />
          </strong>
          <strong>
            {insightItem.rating} <br />
          </strong>
          <strong>
            {insightItem.review} <br />
          </strong>
        </div>
        <hr />

        <Link
          style={{ marginRight: 10 }}
          to={{ pathname: "/user/insights/details", state: { insightItem } }}
        >
          <Button>Details</Button>
        </Link>

        <Link
          style={{ marginRight: 10 }}
          to={{ pathname: "user/insights/edit", state: { insightItem } }}
        >
          <Button>Edit</Button>
        </Link>
        <Button variant='danger' onClick={() => handleDeleteInsight(insightItem._id)}>
          Delete
        </Button>
      </Alert>
    </>
  );
}

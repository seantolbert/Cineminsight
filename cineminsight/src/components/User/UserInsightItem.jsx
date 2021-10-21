import { Link } from "react-router-dom";

export default function UserInsightItem({ handleDeleteInsight, insightItem }) {
  return (
    <>
      <div>
        {insightItem.cinema} <br />
        {insightItem.rating} <br />
        {insightItem.review} <br />
      </div>
      <div>
        <Link
          to={{ pathname: "/user/insights/details", state: { insightItem } }}
        >
          <button>Details</button>
        </Link>
      </div>
      &nbsp;
      <Link to={{ pathname: "user/insights/edit", state: { insightItem } }}>
        <button>Edit</button>
      </Link>
      &nbsp;
      <button onClick={() => handleDeleteInsight(insightItem._id)}>
        Delete
      </button>
    </>
  );
}

import UserCard from "../../components/User/UserCard";
import UserInsights from "../../components/User/UserInsights";
import { Link } from "react-router-dom";

export default function UserProfilePage({
  handleDeleteInsight,
  insights,
  user,
}) {
  return (
    <main>
      <h1>Profile</h1>
      <UserCard user={user} />
      <Link to="user/insights/newinsight">
        <button>New Log</button>
      </Link>
      <h2>Insights</h2>
      <hr />
      <UserInsights
        insights={insights}
        user={user}
        handleDeleteInsight={handleDeleteInsight}
      />
    </main>
  );
}

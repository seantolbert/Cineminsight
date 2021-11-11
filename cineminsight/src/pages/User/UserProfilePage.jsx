import UserCard from "../../components/User/UserCard";
import UserInsights from "../../components/User/UserInsights";

export default function UserProfilePage({
  handleDeleteInsight,
  insights,
  user,
}) {
  return (
    <main>
      <h1>Profile</h1>
      <UserCard user={user} />
      <h2>{user.name} Insights</h2>
      <hr />
      <UserInsights
        insights={insights}
        user={user}
        handleDeleteInsight={handleDeleteInsight}
      />
    </main>
  );
}

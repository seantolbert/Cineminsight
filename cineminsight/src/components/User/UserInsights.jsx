import UserInsightItem from "./UserInsightItem";

export default function UserInsights({ handleDeleteInsight, insights, user }) {
  const insightsList = insights.map((insight) => {
    if (user._id === insight.user) {
      return (
        <UserInsightItem
          handleDeleteInsight={handleDeleteInsight}
          key={insight._id}
          insightItem={insight}
        />
      );
    }
  });
  return <main>{insightsList}</main>;
}

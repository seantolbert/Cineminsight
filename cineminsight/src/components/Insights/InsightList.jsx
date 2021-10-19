import InsightCard from "../Insights/InsightCard";

export default function InsightList({ insights, user }) {
  const insightList = insights.map((insight) => {
    return <InsightCard key={insight._id} insightItem={insight} />;
  });

  return <main>{insightList}</main>;
}

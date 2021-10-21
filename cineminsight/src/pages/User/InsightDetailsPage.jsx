import React from "react";
import UserInsightDetail from "../../components/User/UserInsightDetail";
import { useLocation } from "react-router-dom";

export default function InsightDetailsPage() {
  const {
    state: { insightItem },
  } = useLocation();

  return (
    <main>
      <h1>Insight Details</h1>
      <UserInsightDetail insight={insightItem} key={insightItem._id} />
    </main>
  );
}

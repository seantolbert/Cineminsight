import InsightList from '../../components/Insights/InsightList'

export default function InsightsIndexPage({insights}) {
    return (
      <main>
        <h1>All Insights</h1>
        <hr />
        <main>
          <InsightList insights={insights} />
        </main>
      </main>
    );
  }
  
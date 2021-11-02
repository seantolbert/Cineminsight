import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import UserProfilePage from "../User/UserProfilePage";
import AddCinemaPage from "../Cinemas/AddCinemaPage/AddCinemaPage";
import CinemasIndexPage from "../Cinemas/CinemasIndexPage";
import CinemaDetailsPage from "../Cinemas/CinemaDetailsPage";
import EditCinemaPage from "../Cinemas/EditCinemaPage";
import InsightsIndexPage from "../Insights/InsightsIndexPage";
import AddInsightPage from "../User/AddInsightPage";
import EditInsightPage from "../User/EditInsightPage";
import InsightDetailsPage from "../User/InsightDetailsPage";
import HomePage from "../HomePage/HomePage";
import * as cinemasAPI from "../../utilities/cinemas-api";
import * as insightsAPI from "../../utilities/insights-api";

function App() {
  const [user, setUser] = useState(getUser());
  const [cinemas, setCinemas] = useState([]);
  const [insights, setInsights] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const getCinemas = async () => {
      const cinemas = await cinemasAPI.getAll();
      setCinemas(cinemas);
    };
    getCinemas();
  }, []);

  useEffect(() => {
    const getInsights = async () => {
      const insights = await insightsAPI.getAll();
      setInsights(insights);
    };
    getInsights();
  }, []);

  useEffect(() => {
    history.push("/cinemas");
  }, [cinemas, history]);

  useEffect(() => {
    history.push("/insights");
  }, [insights, history]);

  const handleAddCinema = async (newCinemaData) => {
    const newCinema = await cinemasAPI.create(newCinemaData);
    setCinemas([...cinemas, newCinema]);
  };

  const handleUpdateCinema = async (updatedCinemaData) => {
    const updatedCinema = await cinemasAPI.update(updatedCinemaData);
    const newCinemasArray = cinemas.map((c) =>
      c._id === updatedCinema._id ? updatedCinema : c
    );
    setCinemas(newCinemasArray);
  };

  const handleDeleteCinema = async (id) => {
    await cinemasAPI.deleteOne(id);
    setCinemas(cinemas.filter((cinema) => cinema._id !== id));
  };

  const handleAddInsight = async (newInsightData) => {
    const newInsight = await insightsAPI.create(newInsightData);
    setInsights([...insights, newInsight]);
  };

  const handleUpdateInsight = async (updatedInsightData) => {
    const updatedInsight = await insightsAPI.update(updatedInsightData);
    const newInsightsArray = insights.map((i) =>
      i._id === updatedInsight._id ? updatedInsight : i
    );
    setInsights(newInsightsArray);
  };

  const handleDeleteInsight = async (id) => {
    await insightsAPI.deleteOne(id);
    const newInsights = insights.filter((insight) => {
      return insight._id !== id;
    });
    setInsights(newInsights);
  };

  return (
    <main className="App">
      {user ? (
        <div>
          <div className="nav">
            <NavBar user={user} setUser={setUser} />
          </div>

          <>
            <Switch>
              <Route exact path="/">
                <HomePage user={user} cinemas={cinemas} insights={insights} />
              </Route>
             
              <Route path="/cinemas/new">
                <AddCinemaPage handleAddCinema={handleAddCinema} />
              </Route>
              <Route path="/cinemas">
                <CinemasIndexPage cinemas={cinemas} />
              </Route>
              <Route exact path="/cinema-details">
                <CinemaDetailsPage
                  handleDeleteCinema={handleDeleteCinema}
                  cinemas={cinemas}
                />
              </Route>
              <Route exact path="/edit">
                <EditCinemaPage handleUpdateCinema={handleUpdateCinema} />
              </Route>
              <Route exact path="/user">
                <UserProfilePage
                  user={user}
                  insights={insights}
                  handleDeleteInsight={handleDeleteInsight}
                />
              </Route>
              <Route exact path="/user/insights/newinsight">
                <AddInsightPage
                  handleAddInsight={handleAddInsight}
                  cinemas={cinemas}
                  insights={insights}
                  user={user}
                />
              </Route>
              <Route exact path="/insights">
                <InsightsIndexPage cinemas={cinemas} insights={insights} />
              </Route>
              <Route exact path="/user/insights/edit">
                <EditInsightPage
                  handleUpdateInsight={handleUpdateInsight}
                  cinemas={cinemas}
                  user={user}
                />
              </Route>
              <Route exact path="/user/insights/details">
                <InsightDetailsPage
                  handleDeleteInsight={handleDeleteInsight}
                  cinemas={cinemas}
                  user={user}
                />
              </Route>
            </Switch>
          </>
        </div>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;

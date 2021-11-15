import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage/HomePage";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { Jumbotron } from "react-bootstrap";
import DetailsPage from "./pages/DetailsPage/Details";
import MySpace from "./pages/MySpace";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />

      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route path="/spaces/:id" component={DetailsPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/myspace" component={MySpace} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

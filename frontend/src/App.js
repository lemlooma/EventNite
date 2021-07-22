import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import EventDetails from "./components/EventDetails";
import CreateEvent from "./components/CreateEvent"
import Navigation from "./components/Navigation";
import ProfileMain from "./components/ProfileMain";

import './index.css';
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch, isLoaded]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <div>
              <HomePage />
              <Footer />
            </div>
          </Route>
          <Route path="/profile">
            <div className={`app-grid-container`}>
              <Navigation isLoaded={isLoaded} />
              <ProfileMain />
              <Footer />
            </div>
          </Route>
          <Route path="/event/:id" component={EventDetails} />
          <Route path="/newevent" component={CreateEvent}>
            <div>
  
              <CreateEvent />
              <Footer />
            </div>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

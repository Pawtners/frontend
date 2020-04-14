// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import history from "./utils/history";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>

        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={UserProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

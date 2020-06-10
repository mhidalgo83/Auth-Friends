import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import Friends from "./components/Friends";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/protected">
            Friends
          </Link>
        </nav>
      </div>
      <Switch>
        <PrivateRoute exact path="/protected" component={Friends} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

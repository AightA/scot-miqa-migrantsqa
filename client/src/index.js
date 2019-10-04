import React, { Component } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Status from "./components/Status";
import MenuBar from "./components/MenuBar";
import Register from "./components/UserRegistration";
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    userId: null
  };

  setUserId = id => {
    if (id) {
      this.setState({ userId: parseInt(id) });
    } else {
      this.setState({ userId: null });
    }
  };

  componentDidMount() {
    this.setUserId(localStorage.getItem("userId"));
  }

  render() {
    return (
      <Router>
        <MenuBar userId={this.state.userId} />
        <Route
          path="/"
          exact
          render={props => <Home userId={this.state.userId} />}
        />
        <Route path="/about/" component={About} />
        <Route path="/status/" component={Status} />
        <Route path="/register" component={Register} />
        <Route
          path="/login/"
          render={props => (
            <Login
              setUserId={this.setUserId}
              isLoggedIn={this.state.userId !== null}
            />
          )}
        />
        <Route
          path="/profile"
          render={props => <ProfilePage userId={this.state.userId} />}
        />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

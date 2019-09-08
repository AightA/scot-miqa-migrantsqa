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
    isLoggedIn: false
  };

  setIsLoggedIn = isLoggedIn => {
    this.setState({
      isLoggedIn: isLoggedIn
    });
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setIsLoggedIn(true);
    }
  }

  render() {
    return (
      <Router>
        <MenuBar isLoggedIn={this.state.isLoggedIn} />
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/status/" component={Status} />
        <Route path="/register" component={Register} />
        <Route
          path="/login/"
          render={props => (
            <Login
              setIsLoggedIn={this.setIsLoggedIn}
              isLoggedIn={this.state.isLoggedIn}
            />
          )}
        />
        <Route
          path="/profile"
          render={props => <ProfilePage isLoggedIn={this.state.isLoggedIn} />}
        />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

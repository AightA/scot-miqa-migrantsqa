import React from "react";
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

const Routes = () => {
  return (
    <Router>
      <MenuBar />
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/status/" component={Status} />
      <Route path="/register" component={Register} />
      <Route path="/login/" component={Login} />
      <Route path="/profile" component={ProfilePage} />
    </Router>
  );
};

ReactDOM.render(<Routes />, document.getElementById("root"));

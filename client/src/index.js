import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Status from "./components/Status";
import MenuBar from "./components/MenuBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <MenuBar />
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/status/" component={Status} />
    </Router>
  );
};

ReactDOM.render(<Routes />, document.getElementById("root"));

{
  /* <div>
<ul>
  <li>
    <Link className="nav-link" to="/">
      Home
    </Link>
  </li>
  <li>
    <Link className="nav-link" to="/about">
      About
    </Link>
  </li>
  <li>
    <Link className="nav-link" to="/status">
      Status
    </Link>
  </li>
</ul>

<div> */
}

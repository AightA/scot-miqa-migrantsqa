import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Icon
} from "semantic-ui-react";
import { UserLogin } from "../api/login";
import { Link } from "react-router-dom";
import Home from "./Home";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: null
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    UserLogin(email, password)
      .then(loggedInUser => {
        console.log(loggedInUser);
        localStorage.setItem("token", loggedInUser.token);
        document.location.href = "/";
      })
      .catch(err => {
        this.setState({
          isLoggedIn: err.status > 200 && err.status < 405 ? false : true
        });
      });
  };

  render() {
    const { email, password, isLoggedIn } = this.state;
    if (localStorage.getItem("token")) {
      return <Home />;
    } else
      return (
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" icon color="brown" textAlign="center">
              <Icon name="sign in" color="brown" />
              Login
            </Header>

            <Form onSubmit={this.handleOnSubmit} size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  name="email"
                  icon="mail"
                  iconPosition="left"
                  placeholder="Email Address"
                  onChange={this.handleOnChange}
                  value={email}
                  type="email"
                />

                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  onChange={this.handleOnChange}
                  value={password}
                  type="password"
                />

                <Button fluid color="brown" size="large">
                  login
                </Button>
              </Segment>
            </Form>
            {isLoggedIn === false ? (
              <Message error>Please check your email/password</Message>
            ) : null}
            <Message>
              <Link to="/forgot-password">Forgot password?</Link>
            </Message>
            <Message>
              Not registered yet? <Link to="/register">Sign up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      );
  }
}

export default Login;

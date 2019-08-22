import React, { Component } from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { postUsers } from "../api/registration";

export default class UserRegistration extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errorsLog: [],
    successLog: [],
    err: null
  };

  isFormValid = () => {
    let errorsLog = [];
    let successLog = [];
    let success;
    let error;

    const { username, email, password, passwordConfirmation } = this.state;
    if (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    ) {
      error = { message: "Please fill all fields" };
      this.setState({ errorsLog: errorsLog.concat(error), err: true });
      return false;
    } else if (password.length < 2 || passwordConfirmation.length < 2) {
      error = { message: "Password is too short" };
      this.setState({ errorsLog: errorsLog.concat(error), err: true });
      return false;
    } else if (password !== passwordConfirmation) {
      error = { message: "Password doesn't match" };
      this.setState({ errorsLog: errorsLog.concat(error), err: true });
      return false;
    } else {
      success = { message: "Successfully registered" };
      this.setState({ successLog: successLog.concat(success), err: false });
      return true;
    }
  };

  displayMessage = message => {
    var pars = message.map((message, index) => (
      <p key={index}>{message.message}</p>
    ));
    console.log(pars);
    return pars;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    if (!this.isFormValid()) {
      return false;
    } else {
      const { username, email, password } = this.state;
      postUsers(username, email, password);
      this.setState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      });
    }
  };

  handleMessageLog = () => {
    const { err, errorsLog, successLog } = this.state;
    if (err === true)
      return (
        <Message error>
          <h3>Error</h3>
          {this.displayMessage(errorsLog)}
        </Message>
      );
    if (err === false)
      return <Message success>{this.displayMessage(successLog)}</Message>;
  };

  render() {
    const { username, email, password, passwordConfirmation } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="brown" textAlign="center">
            <Icon name="registered" color="brown" />
            Register
          </Header>
          <Form onSubmit={this.handleOnSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="username"
                onChange={this.handleChange}
                value={username}
                type="text"
              />

              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                value={email}
                type="email"
              />

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                value={password}
                type="password"
              />

              <Form.Input
                fluid
                name="passwordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
                value={passwordConfirmation}
                type="password"
              />
              <Button color="brown" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
          {this.handleMessageLog()}
          <Message>
            Already a User ?<Link to="/login"> Login</Link>{" "}
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

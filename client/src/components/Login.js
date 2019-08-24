import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleUserChange = e => {};

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Login
          </Header>
          <Segment>
            <Form size="large">
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Email address"
                onChange={this.handleUserChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button color="blue" fluid size="large">
                Login
              </Button>
            </Form>
          </Segment>
          <Message>
            Not registered yet? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;

import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Form, Grid, Header, Segment } from "semantic-ui-react";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    fetch(`http://localhost:4000/api/users/1`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data
        });
      });
  }
  render() {
    const userData = this.state.user;
    return (
      <div>
        <Grid centered columns={3}>
          <Grid.Column>
            <Header as="h2" textAlign="center" color="brown">
              Account Profile <i class="earlybirds icon" />
            </Header>
            <Segment>
              {userData ? (
                <Form size="large">
                  <label>Email</label>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Email address"
                    value={userData.email}
                    onChange={this.handleEmailChange}
                  />
                  <label>Password</label>
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    value={userData.password}
                    onChange={this.handlePasswordChange}
                  />
                </Form>
              ) : (
                <p> The Page is Loading ... </p>
              )}
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default ProfilePage;

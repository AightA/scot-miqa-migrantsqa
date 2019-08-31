import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { updatePassword } from "../api/updatePassword";
import { Form, Grid, Header, Segment, Button } from "semantic-ui-react";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      update: false,
      error: false
    };
  }
  componentDidMount() {
    fetch(`http://localhost:4000/api/users/2`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data
        });
      })
      .catch(error => {
        console.log("error is ", error);
      });
  }

  // changeNewPassword = (email, password) => {
  //   const updateDate = {
  //     method: "PUT",
  //     body: JSON.stringify({ email, password }),
  //     headers: { "Content-Type": "application/json" }
  //   };
  //   return fetch("/auth/change-password", updateDate);
  //   // .then(response => console.log(response.status))
  //   // .catch(err => console.error(err));
  // };

  validateForm() {
    return (
      this.state.user.email.length > 0 && this.state.user.password.length > 0
    );
  }

  handleNameChange = event => {
    const name = event.target.value;
    this.setState({ name: name });
  };

  handleEmailChange = event => {
    const email = event.target.value;
    this.setState({ email: email });
  };

  // handleOnUpdate = e => {
  //   e.preventDefault();
  //   if (this.isFormValid()) {
  //     this.setState({ errorsLog: [], isLoading: true });
  //     const { email, password, errorsLog } = this.state;
  //     updatePassword(email, password)
  //       .then(updatePassword => {
  //         this.setState({
  //           isLoading: false,
  //           isSuccess: updatePassword.status === 200 ? true : false,
  //           email: "",
  //           password: ""
  //         });
  //       })
  //       .catch(err => {
  //         console.error(err);
  //         this.setState({ errorsLog: errorsLog.concat(err), isLoading: false });
  //       });
  //   }
  // };

  updatePassword = e => {
    e.preventDefault();
    fetch(`http://localhost:4000/auth/change-password`, {
      // email: this.state.users.email,
      // password: this.state.users.password,
    })
      .then(res => {
        console.log(res.data);
        if (res.data.message === "passsword updated") {
          this.setState({
            updated: true,
            error: false
          });
        } else {
          this.setState({
            updated: false,
            error: true
          });
        }
      })
      .catch(error => {
        console.log(error.data);
      });
  };

  // handlePasswordChange = (event) => {
  //   const password = event.target.value;
  //   this.setState({ password: password });
  // };
  handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = this.state.users;
    console.log(`A first name was submitted: ${name}. 
                 An email was submitted: ${email}. 
                 And Password was submitted : ${password}`);
  };

  render() {
    console.log(this.state.user);
    const userData = this.state.user;
    const { error, updated } = this.state;

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
                  <label>User name</label>
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Username"
                    // controlId="password"
                    type="text"
                    value={userData.username}
                    onChange={this.handleNameChange}
                  />

                  <label>Email</label>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Email address"
                    value={userData.email}
                    onChange={this.handleEmailChange}
                  />

                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Current Password"
                    // controlId="password"
                    type="password"
                    // value={userData.password}
                    onChange={this.updatePassword}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="New Password"
                    // controlId="password"
                    type="password"
                    // value={userData.password}
                    onChange={this.updatePassword}
                  />
                  <Form.Input
                    fluid
                    icon="repeat"
                    iconPosition="left"
                    placeholder="New Password"
                    // controlId="password"
                    type="password"
                    // value={userData.password}
                    onChange={this.updatePassword}
                  />

                  <Button
                    fluid
                    size="large"
                    onClick={this.updatePassword}
                    disabled={!this.validateForm()}
                    id="submit"
                    name="submit"
                    type="submit"
                    content="Update"
                    color="brown"
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

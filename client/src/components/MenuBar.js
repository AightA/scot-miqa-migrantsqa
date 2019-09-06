import React, { Component } from "react";
import { Menu, MenuHeader, Image } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import { getUserById } from "../api/questions";

export default class MenuBar extends Component {
  state = {
    activeItem:
      window.location.pathname === "/"
        ? "home"
        : window.location.pathname.substr(1),
    profilePicUrl: null
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  componentDidMount = () => {
    getUserById(4).then(response => {
      console.log(response);
      this.setState({ profilePicUrl: response.profile_pic });
    });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Menu pointing secondary size="massive" color="brown">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
          as={Link}
          to="/about"
        />
        <Menu.Item
          name="status"
          active={activeItem === "status"}
          onClick={this.handleItemClick}
          as={Link}
          to="/status"
        />

        {this.props.isLoggedIn ? (
          <Menu.Menu position="right">
            <Menu.Item
              name="profile"
              active={activeItem === "profile"}
              onClick={this.handleItemClick}
              as={Link}
              to="/profile"
            />
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              position="right"
              onClick={this.handleLogout}
            />
            <Image src={this.state.profilePicUrl} size="mini" avatar />
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              position="right"
              onClick={this.handleItemClick}
              as={Link}
              to="/login"
            />
            <Menu.Item
              name="register"
              position="right"
              active={activeItem === "register"}
              onClick={this.handleItemClick}
              as={Link}
              to="/register"
            />
          </Menu.Menu>
        )}
      </Menu>
    );
  }
}

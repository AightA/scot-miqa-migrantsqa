import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuBar extends Component {
  state = {
    activeItem:
      window.location.pathname === "/"
        ? "home"
        : window.location.pathname.substr(1)
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
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
        <Menu.Item
          name="register"
          position="right"
          active={activeItem === "register"}
          onClick={this.handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu>
    );
  }
}

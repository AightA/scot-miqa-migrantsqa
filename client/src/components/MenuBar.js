import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <Menu pointing secondary size="massive" color="brown">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={handleItemClick}
        as={Link}
        to="/about"
      />
      <Menu.Item
        name="status"
        active={activeItem === "status"}
        onClick={handleItemClick}
        as={Link}
        to="/status"
      />
    </Menu>
  );
};

export default MenuBar;

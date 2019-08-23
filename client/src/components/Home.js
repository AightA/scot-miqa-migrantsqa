import React from "react";
import "../styles/Home.css";
import Search from "./HomePageSearch";
import { Header, Container, Icon, Input } from "semantic-ui-react";

const Home = () => {
  return (
    <Container>
      <header>
        <Header as="h1">Graduation Project skeleton</Header>
        <Search></Search>
        <Input
          fluid
          icon={<Icon name="add" inverted circular link />}
          placeholder="Write you"
        />
      </header>
    </Container>
  );
};

export default Home;

import React from "react";
import "../styles/Home.css";
import Search from "./HomePageSearch";
import { Header, Container, Icon, Input } from "semantic-ui-react";
import Questions from "./QuestionsCard";
const Home = () => {
  return (
    <Container>
      <header>
        <Header as="h1">Graduation Project skeleton</Header>
        <Search></Search>
        <Input
          fluid
          icon={<Icon name="add" inverted circular link />}
          placeholder="Write your questions here"
        />
      </header>
      <Questions />
    </Container>
  );
};

export default Home;

import React from "react";
import "../styles/Home.css";
import Search from "./HomePageSearch";
import { Container, Divider, Icon, Input } from "semantic-ui-react";
import Questions from "./QuestionsCard";
const Home = () => {
  return (
    <Container>
      <header>
        <Divider horizontal />
        <Search />
        <Divider horizontal />
        <Input
          fluid
          icon={<Icon name="add" inverted circular link />}
          placeholder="Write your questions here"
        />
        <Divider horizontal />
      </header>
      <Questions />
    </Container>
  );
};

export default Home;

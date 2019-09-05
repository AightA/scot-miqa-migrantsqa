import React from "react";
import "../styles/Home.css";
import Search from "./HomePageSearch";
import { Header, Container } from "semantic-ui-react";
import Questions from "./QuestionsCard";
import AddQuestion from "./AddQuestion";
const Home = () => {
  return (
    <Container>
      <header>
        <Header as="h1">Graduation Project skeleton</Header>
        <Search></Search>
        <AddQuestion />
      </header>
      <Questions />
    </Container>
  );
};

export default Home;

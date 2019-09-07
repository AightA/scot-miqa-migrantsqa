import React from "react";
import "../styles/Home.css";
import Search from "./HomePageSearch";
import { Header, Container } from "semantic-ui-react";
import QuestionsController from "./QuestionsController/QuestionController";

const Home = () => {
  return (
    <Container>
      <Header as="h1">Graduation Project skeleton</Header>
      <Search></Search>
      <QuestionsController />
    </Container>
  );
};

export default Home;

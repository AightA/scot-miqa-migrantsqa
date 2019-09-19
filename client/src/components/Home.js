import React from "react";
import "../styles/Home.css";
import Search from "./HomePageSearch";
import { Container, Divider } from "semantic-ui-react";
import QuestionsController from "./QuestionsController/QuestionController";

const Home = props => {
  return (
    <Container>
      <Divider horizontal />
      <Search />
      <Divider horizontal />
      <QuestionsController userId={props.userId} />
    </Container>
  );
};

export default Home;

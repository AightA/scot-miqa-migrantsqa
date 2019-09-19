import React, { Component } from "react";
import "../styles/Home.css";
import HomePageSearch from "./HomePageSearch";
import { Container, Divider } from "semantic-ui-react";
import QuestionsController from "./QuestionsController/QuestionController";

export default class Home extends Component {
  state = {
    tags: []
  };

  getFilteredTags = tags => {
    this.setState({
      tags: tags
    });
  };
  render() {
    return (
      <Container>
        <Divider horizontal />
        <HomePageSearch getFilteredTags={this.getFilteredTags} />
        <Divider horizontal />
        <QuestionsController tag={this.state.tags} />
      </Container>
    );
  }
}

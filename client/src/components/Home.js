import React, { Component } from "react";
import "../styles/Home.css";
import HomePageSearch from "./HomePageSearch";
import { Container, Divider } from "semantic-ui-react";
import QuestionsContainer from "./QuestionsContainer";

export default class Home extends Component {
  state = {
    tags: []
  };

  getFilteredTags = tags => {
    this.setState({
      tags
    });
  };
  render() {
    return (
      <Container>
        <Divider horizontal />
        <HomePageSearch getFilteredTags={this.getFilteredTags} />
        <Divider horizontal />
        <QuestionsContainer tags={this.state.tags} userId={this.props.userId} />
      </Container>
    );
  }
}

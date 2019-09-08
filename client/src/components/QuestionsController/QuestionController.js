import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import DisplayQuestions from "../QuestionsCard";
import AddQuestion from "../AddQuestion";
import { getQuestions } from "../../api/questions";

export default class Controller extends Component {
  constructor() {
    super();
    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    this.pageReload();
  }

  pageReload = () => {
    getQuestions().then(res => {
      this.setState({
        questions: res
      });
    });
  };

  render() {
    return (
      <Container>
        <AddQuestion pageReload={this.pageReload} />
        <DisplayQuestions questions={this.state.questions} />
      </Container>
    );
  }
}

import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import DisplayQuestions from "../QuestionsCard";
import AddQuestion from "../AddQuestion";
import { getQuestions } from "../../api/questions";
import { getAnswers } from "../../api/answers";

export default class Controller extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      answers: [],
      activeIndex: -1,
      id: ""
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex, id: index });
  };

  componentDidMount() {
    this.pageReload();
  }

  pageReload = () => {
    getQuestions().then(res => {
      this.setState({
        questions: res
      });
    });
    getAnswers().then(res => {
      this.setState({ answers: res });
    });
  };

  render() {
    return (
      <Container>
        <AddQuestion pageReload={this.pageReload} />
        <DisplayQuestions
          pageReload={this.pageReload}
          toggleAnswers={this.handleClick}
          questions={this.state.questions}
          activeIndex={this.state.activeIndex}
          QuestionId={this.state.id}
          answers={this.state.answers}
        />
      </Container>
    );
  }
}

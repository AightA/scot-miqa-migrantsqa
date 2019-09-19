import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import DisplayQuestions from "../QuestionsCard";
import AddQuestion from "../AddQuestion";
import { getQuestions } from "../../api/questions";
import { getAnswers } from "../../api/answers";

export default class Controller extends Component {
  constructor(props) {
    super(props);
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
        questions: res,
        tags: this.props.tag
      });
    });
    getAnswers().then(res => {
      this.setState({ answers: res });
    });
  };

  filterByTags = () => {
    if (this.props.tag.length) {
      return this.state.questions.filter(question => {
        const selectedTags = this.props.tag.filter(tag => {
          return question.tags.includes(tag);
        });
        return selectedTags.length && selectedTags;
      });
    } else {
      return this.state.questions;
    }
  };

  render() {
    return (
      <Container>
        <AddQuestion pageReload={this.pageReload} />
        <DisplayQuestions
          pageReload={this.pageReload}
          toggleAnswers={this.handleClick}
          questions={this.filterByTags()}
          activeIndex={this.state.activeIndex}
          QuestionId={this.state.id}
          answers={this.state.answers}
        />
      </Container>
    );
  }
}

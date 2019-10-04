import React, { Component } from "react";
import { Container, Loader } from "semantic-ui-react";
import QuestionsList from "./QuestionsList";
import AddQuestion from "./AddQuestion";
import { getQuestions } from "../api/questions";
import { getAnswers } from "../api/answers";

export default class QuestionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: [],
      activeIndex: -1,
      id: "",
      IsLoading: true
    };
  }

  componentDidMount() {
    this.pageReload();
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex, id: index });
  };

  pageReload = () => {
    getQuestions().then(res => {
      this.setState({
        questions: res,
        tags: this.props.tags,
        IsLoading: false
      });
    });
    getAnswers().then(res => {
      this.setState({
        answers: res
      });
    });
  };

  filterByTags = () => {
    if (this.props.tags.length) {
      return this.state.questions.filter(question => {
        const selectedTags = this.props.tags.filter(tag => {
          return question.tags && question.tags.includes(tag);
        });
        return selectedTags.length && selectedTags;
      });
    } else {
      return this.state.questions;
    }
  };

  getQuestionScoreAndId = () => {
    this.state.questions.map(question => question);
  };

  render() {
    return this.state.IsLoading ? (
      <Loader />
    ) : (
      <Container>
        <AddQuestion pageReload={this.pageReload} />
        <QuestionsList
          pageReload={this.pageReload}
          toggleAnswers={this.handleClick}
          questions={this.filterByTags()}
          activeIndex={this.state.activeIndex}
          QuestionId={this.state.id}
          answers={this.state.answers}
          userId={this.props.userId}
        />
      </Container>
    );
  }
}

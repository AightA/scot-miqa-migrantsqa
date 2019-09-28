import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { postAnswer, updateScore } from "../api/questions";
import QuestionCard from "./QuestionCard";

export default class QuestionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCardId: null,
      editQuestion: null,
      editQuestionId: null,
      editContentQuestion: null,
      content: "",
      score: 0,
      tags: "",
      deleteQuestion: null,
      deletedsucessfully: false
    };
  }
  handleEditClick = (question, event) => {
    event.stopPropagation();
    this.setState({
      editQuestion: question,
      editContentQuestion: question.content,
      editQuestionId: question.id
    });
  };

  handleCancelClick = event => {
    event.stopPropagation();
    this.setState({
      editQuestion: null
    });
  };

  handleSaveClick = question => {
    question.stopPropagation();
    const postData = {
      method: "POST",
      body: JSON.stringify({
        content: this.state.editContentQuestion,
        date_posted: new Date(),
        id: this.state.editQuestionId
      }),
      headers: { "Content-Type": "application/json" }
    };
    return fetch("/api/questions/update-question", postData)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          this.props.pageReload();
        } else {
          throw res;
        }
      })
      .then(loggedInUser => {
        this.setState(state => ({
          editQuestion: null
        }));
      })
      .catch(err => {});
  };
  handleOnSubmitAnswer = e => {
    e.preventDefault();
    const { content, tags } = this.state;
    const questionId = this.props.QuestionId;

    postAnswer(content, tags, questionId)
      .then(result => {
        if (result.status === 200) {
          this.props.pageReload();
          this.setState({
            content: ""
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  handleDeleteClick = (question, event) => {
    event.stopPropagation();
    this.setState(state => ({ deleteQuestion: question.id }));
    const postData = {
      method: "DELETE",
      body: JSON.stringify({
        id: question.id
      }),
      headers: { "Content-Type": "application/json" }
    };
    fetch("/api/questions/delete-question", postData)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          this.props.pageReload();
        } else {
          throw res;
        }
      })
      .then(loggedInUser => {
        this.setState(state => ({
          deleteQuestion: null,
          deletedsucessfully: true
        }));
      })
      .catch(err => {});
  };

  handleEditChange = e => {
    this.setState({
      editContentQuestion: e.target.value
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnClickUpvoteBtn = (question, userId) => {
    //console.log({ question, userId });
    if (!userId || userId === question.user_id) return;
    const score = question.score + 1;
    updateScore(score, question.id)
      .then(result => {
        if (result.status === 200) {
          this.props.pageReload();
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <Container>
        {this.props.questions.map((question, index) => {
          return (
            <QuestionCard
              index={index}
              activeIndex={this.props.activeIndex}
              question={question}
              userId={this.props.userId}
              toggleAnswers={this.props.toggleAnswers}
              editQuestion={this.state.editQuestion}
              editContentQuestion={this.state.editContentQuestion}
              handleSaveClick={this.handleSaveClick}
              onChange={this.handleEditChange}
              handleCancelClick={this.handleCancelClick}
              handleEditClick={this.handleEditClick}
              answers={this.props.answers}
              handleDeleteClick={this.handleDeleteClick}
              handleChange={this.handleChange}
              content={this.state.content}
              handleOnSubmitAnswer={this.handleOnSubmitAnswer}
              handleOnClickUpvoteBtn={this.handleOnClickUpvoteBtn}
            />
          );
        })}
      </Container>
    );
  }
}

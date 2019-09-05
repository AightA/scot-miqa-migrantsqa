import React, { Component } from "react";
import { Container, Segment, Form } from "semantic-ui-react";
import { postQuestion } from "../api/questions";
export default class AddQuestion extends Component {
  state = {
    content: "",
    tags: null,
    isAnswered: null,
    score: null,
    userId: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    const { content, tags, isAnswered, score, userId } = this.state;
    postQuestion(content, tags, isAnswered, score, userId)
      .then(() => {
        this.setState({
          content: "",
          tags: null,
          isAnswered: null,
          score: null,
          userId: ""
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { content } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleOnSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              action={{ icon: "circular add" }}
              placeholder="Please write your question here..."
              name="content"
              onChange={this.handleChange}
              value={content}
              required
              minLength={12}
              type="text"
            />
          </Segment>
        </Form>
      </Container>
    );
  }
}

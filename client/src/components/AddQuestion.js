import React, { Component } from "react";
import { Container, Segment, Form } from "semantic-ui-react";
import { postQuestion } from "../api/questions";
export default class AddQuestion extends Component {
  state = {
    content: "",
    date_posted: "",
    tags: null,
    is_answered: null,
    score: null,
    user_id: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();

    const {
      content,
      date_posted,
      tags,
      is_answered,
      score,
      user_id
    } = this.state;
    postQuestion(content, date_posted, tags, is_answered, score, user_id)
      .then(postedQuestion => {
        this.setState({
          content: "",
          date_posted: "",
          tags: null,
          is_answered: null,
          score: null,
          user_id: ""
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const {
      content,
      date_posted,
      tags,
      is_answered,
      score,
      user_id
    } = this.state;
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

import React, { Component } from "react";
import { Container, Segment, Form, Dropdown } from "semantic-ui-react";
import { postQuestion } from "../api/questions";
import { tags } from "../util/tag-options";

export default class AddQuestion extends Component {
  state = {
    content: "",
    tags,
    isAnswered: null,
    score: null,
    userId: ""
  };

  handleAddition = (e, { value }) => {
    this.setState(prevState => ({
      tags: [{ text: value, value }, ...prevState.tags]
    }));
  };

  handleChangeTag = (e, { value }) => this.setState({ currentValues: value });

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    const questionTag = this.state.currentValues;
    const { content, isAnswered, score, userId } = this.state;
    postQuestion(content, questionTag, isAnswered, score, userId)
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

  render() {
    const { content, currentValues } = this.state;
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
            <Dropdown
              multiple
              options={this.state.tags}
              placeholder="Add Tags"
              search
              selection
              fluid
              multiple
              allowAdditions
              value={currentValues}
              onAddItem={this.handleAddition}
              onChange={this.handleChangeTag}
            />
          </Segment>
        </Form>
      </Container>
    );
  }
}

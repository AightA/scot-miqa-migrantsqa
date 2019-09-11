import React, { Component } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  Segment,
  TextArea,
  Accordion
} from "semantic-ui-react";

function formatingDate(date) {
  const event = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };

  return event.toLocaleDateString("en-GB", options);
}

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCardId: null,
      editQuestion: null,
      editQuestionId: null,
      editContentQuestion: null,
      userId: 1
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
          console.log("reloaded page");
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

  onChange(e) {
    this.setState({ editContentQuestion: e.target.value });
  }

  render() {
    return (
      <Container>
        {this.props.questions.map((question, index) => {
          return (
            <Card fluid key={question.question_id}>
              <Card.Content>
                <Card.Header>
                  <Accordion>
                    <Accordion.Title
                      active={this.props.activeIndex === index}
                      index={index}
                      onClick={this.props.toggleAnswers}
                      id={`card-${index}`}
                    >
                      {this.state.editQuestion &&
                      this.state.editQuestion.id === question.id ? (
                        <Form>
                          <TextArea
                            value={this.state.editContentQuestion}
                            style={{ minHeight: 100 }}
                            onChange={e => this.onChange(e)}
                          />
                          <div className="ui two buttons">
                            <Button
                              onClick={this.handleSaveClick}
                              basic
                              color="green"
                            >
                              Save
                            </Button>
                            <Button
                              onClick={this.handleCancelClick}
                              basic
                              color="gray"
                            >
                              Cancel
                            </Button>
                          </div>
                        </Form>
                      ) : (
                        question.content
                      )}
                      {this.state.userId === question.user_id &&
                      !this.state.editQuestion ? (
                        <Card.Content extra>
                          <div className="ui two buttons">
                            <Button
                              basic
                              color="green"
                              onClick={event =>
                                this.handleEditClick(question, event)
                              }
                            >
                              Edit
                            </Button>
                            <Button basic color="red">
                              Delete
                            </Button>
                          </div>
                        </Card.Content>
                      ) : null}
                    </Accordion.Title>

                    <Accordion.Content
                      active={this.props.activeIndex === index}
                    >
                      {this.props.answers.map(answer => {
                        return answer.question_id === question.id ? (
                          <Segment key={answer.answer_id} size="small">
                            <Card.Content>
                              <Card.Header>{answer.content}</Card.Header>
                            </Card.Content>
                            <Card.Meta textAlign="right">
                              {" "}
                              {formatingDate(answer.date_answered)}
                            </Card.Meta>
                            <Card.Meta textAlign="right">
                              {" "}
                              by {answer.username}
                            </Card.Meta>
                          </Segment>
                        ) : null;
                      })}
                    </Accordion.Content>
                  </Accordion>
                </Card.Header>
                <Card.Meta
                  textAlign="right"
                  style={{
                    fontSize: "12px",
                    fontStyle: "italic"
                  }}
                >
                  {" "}
                  #
                  {question.tags > 1 ? question.tags.join(" #") : question.tags}
                </Card.Meta>
                <Card.Meta textAlign="right">
                  {formatingDate(question.date_posted)}
                </Card.Meta>
                <Card.Meta textAlign="right"> by {question.username}</Card.Meta>
              </Card.Content>
            </Card>
          );
        })}
      </Container>
    );
  }
}

export default Questions;

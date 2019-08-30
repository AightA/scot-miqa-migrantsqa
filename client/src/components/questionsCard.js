import React from "react";
import { getQuestions } from "../api/questions";
import { Card, Grid, Container } from "semantic-ui-react";

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
class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }
  componentDidMount() {
    getQuestions().then(response => {
      this.setState({ questions: response });
    });
  }
  render() {
    const { questions } = this.state;
    return (
      <Container>
        {questions.map(question => {
          return (
            <Card fluid>
              <Card.Content>
                <Card.Header>{question.content}</Card.Header>
                <Card.Meta>{formatingDate(question.date_posted)}</Card.Meta>
                <Card.Meta>
                  {"by"} {question.username}
                </Card.Meta>
              </Card.Content>
            </Card>
          );
        })}
      </Container>
    );
  }
}
export default Questions;

import React from "react";
import { getQuestions, getUsers } from "../api/questions";
import { Card, Grid, Container } from "semantic-ui-react";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
      // users: []
    };
  }

  componentDidMount() {
    getQuestions().then(response => {
      this.setState({ questions: response });
    });

    // getUsers()
    //.then(response => {
    //this.setState({ users: response });
    //});
  }

  render() {
    const { questions, users } = this.state;
    return (
      <Container>
        {questions.map(question => {
          console.log(question.ques_text);
          return (
            <Card fluid>
              <Card.Content>
                <Card.Header>user</Card.Header>
                <Card.Header>{question.ques_text}</Card.Header>
                <Card.Meta>{question.ques_date}</Card.Meta>
              </Card.Content>
            </Card>
          );
        })}
      </Container>
    );
  }
}

export default Questions;

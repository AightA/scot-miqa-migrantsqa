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
    const { questions } = this.state;
    return (
      <Container>
        {questions.map(question => {
          console.log(question.content);
          return (
            <Card fluid>
              <Card.Content>
                <Card.Header>user</Card.Header>
                <Card.Header>{question.content}</Card.Header>
                <Card.Meta>{question.date_posted}</Card.Meta>
              </Card.Content>
            </Card>
          );
        })}
      </Container>
    );
  }
}

export default Questions;

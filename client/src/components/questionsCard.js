import React from "react";
import { getQuestions, getUsers } from "../api/questions";
import { Card, Grid } from "semantic-ui-react";

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
      console.log(response);
      this.setState({ questions: response });
    });
  }

  //componentDidMount() {
  //getUsers()
  //.then(response => {
  //console.log(response)
  //this.setState({ users: response });
  //});
  //}

  render() {
    const { questions, users } = this.state;
    return (
      <div>
        {questions.map(question => {
          console.log(question.ques_text);
          return (
            <Card>
              <Card.Content>
                <Card.Header>{question.ques_text}</Card.Header>
                <Card.Meta>{question.ques_date}</Card.Meta>
              </Card.Content>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Questions;

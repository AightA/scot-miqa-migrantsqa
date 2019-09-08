import React from "react";

import { getQuestions } from "../api/questions";
import { getAnswers } from "../api/answers";
import { Card, Container, Accordion } from "semantic-ui-react";

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
      questions: [],
      answers: [],
      activeIndex: 0
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  componentDidMount() {
    getQuestions().then(response => {
      this.setState({ questions: response });
    });
    getAnswers().then(res => {
      // let resps = res.concat(res);
      this.setState({ answers: res });
      console.log(res);
    });
  }

  render() {
    const { questions, answers, activeIndex } = this.state;
    return (
      <Container>
        {questions.map((question, index) => {
          return (
            <Card fluid>
              <Card.Content>
                <Card.Header>
                  <Accordion>
                    <Accordion.Title
                      active={activeIndex === index}
                      index={index}
                      onClick={this.handleClick}
                      id={`card-${index}`}
                    >
                      {question.content}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === index}>
                      {answers.map(answer => {
                        var check = answer.question_id === question.id;
                        console.log(check);
                        return check ? (
                          <div>
                            <Card.Content>
                              <Card.Header>
                                Here it is:
                                {console.log("answer ", answer.content)}
                                {console.log(
                                  "answer's qid ",
                                  answer.question_id
                                )}
                                {console.log("qid ", question.id)}
                                {answer.content}
                              </Card.Header>
                            </Card.Content>
                          </div>
                        ) : (
                          <div></div>
                        );
                      })}
                    </Accordion.Content>
                  </Accordion>
                </Card.Header>
                <Card.Meta textAlign="right">
                  {formatingDate(question.date_posted)}
                </Card.Meta>
                <Card.Meta textAlign="right"> by {question.username}</Card.Meta>
                <Accordion />
              </Card.Content>
            </Card>
          );
        })}
      </Container>
    );
  }
}

export default Questions;

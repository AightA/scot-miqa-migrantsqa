import React from "react";
import { getQuestions } from "../api/questions";
import { getAnswers } from "../api/answers";
import { Card, Container, Segment, Accordion } from "semantic-ui-react";

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
      this.setState({ answers: res });
    });
  }

  render() {
    const { questions, answers, activeIndex } = this.state;
    return (
      <Container>
        {questions.map((question, index) => {
          return (
            <Card fluid key={question.question_id}>
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

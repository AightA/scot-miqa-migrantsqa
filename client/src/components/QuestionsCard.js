import React from "react";
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

const Questions = props => {
  return (
    <Container>
      {props.questions.map((question, index) => {
        return (
          <Card fluid key={question.question_id}>
            <Card.Content>
              <Card.Header>
                <Accordion>
                  <Accordion.Title
                    active={props.activeIndex === index}
                    index={index}
                    onClick={props.toggleAnswers}
                    id={`card-${index}`}
                  >
                    {question.content}
                  </Accordion.Title>
                  <Accordion.Content active={props.activeIndex === index}>
                    {props.answers.map(answer => {
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
                {/* {question.tags.join(" #")} */}
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
};

export default Questions;

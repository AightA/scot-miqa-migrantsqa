import React from "react";
import { Card, Container } from "semantic-ui-react";

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
      {props.questions.map(question => {
        return (
          <Card fluid>
            <Card.Content>
              <Card.Header>{question.content}</Card.Header>
              <Card.Meta textAlign="right">
                <Card.Meta
                  textAlign="right"
                  style={{
                    fontSize: "12px",
                    fontStyle: "italic"
                  }}
                >
                  {" "}
                  #
                  {question.tags.map(tag => {
                    return <span>{tag} </span>;
                  })}
                </Card.Meta>
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

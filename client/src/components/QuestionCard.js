import React from "react";
import {
  Button,
  Card,
  Form,
  TextArea,
  Accordion,
  Icon,
  Popup,
  Image,
  Grid,
  Label
} from "semantic-ui-react";
import { formatingDate } from "../util/formatingDate";
import AnswersList from "./AnswersList";
import QuestionUpvote from "./QuestionUpvote";
import { Link } from "react-router-dom";

const QuestionCard = props => {
  const { question, index } = props;
  return (
    <Card data-testid="question" fluid key={question.id} style={{padding: '1em'}}>
      <Card.Content>
        <Popup
          content="Expand"
          trigger={
            <Image floated="right" as={Link} to={`/question/${question.id}`}>
              {" "}
              <Icon name="expand" />
            </Image>
          }
        />
        <Card.Header>
          <Accordion>
            <Accordion.Title
              active={props.activeIndex === question.id}
              index={question.id}
              onClick={props.toggleAnswers}
              id={`card-${index}`}
            >
        <Grid columns={3} >
        <Grid.Column textAlign="left" width={2}>
        <QuestionUpvote
          userId={props.userId}
          questionUserId={question.user_id}
          questionScore={question.score}
          questionId={question.id}
          handleOnClickUpvoteBtn={() =>
            props.handleOnClickUpvoteBtn(question, props.userId)
          }
        />
        <Card.Meta textAlign="right">
          {
            props.answers.filter(answer => answer.question_id === question.id)
              .length
          }
          answers
        </Card.Meta>
        </Grid.Column>
          <Grid.Column textAlign="left" width={9}>
              {props.editQuestion && props.editQuestion.id === question.id ? (
                <Form>
                  <TextArea
                    value={props.editContentQuestion}
                    style={{ minHeight: 100 }}
                    onChange={e => props.onChange(e)}
                  />
                  <div className="ui two buttons" style={{width:'40%'}}>
                    <Button onClick={props.handleSaveClick} basic color="black">
                      Save
                    </Button>
                    <Button
                      data-testid="cancel-button"
                      onClick={props.handleCancelClick}
                      basic
                      color="black"
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              ) : (
                question.content
              )}
              {props.userId === question.user_id && !props.editQuestion ? (
                <Card.Content extra>
                  <div className="ui two buttons" style={{width:'40%'}}>
                    <Button
                      basic
                      color="black"
                      onClick={event => props.handleEditClick(question, event)}
                    >
                      Edit
                    </Button>
                    <Button
                      basic
                      color="black"
                      onClick={event =>
                        props.handleDeleteClick(question, event)
                      }
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Content>
              ) : null}
        <Card.Meta
          textAlign="left"
          style={{
            fontStyle: "italic",
            marginTop: '0.5em'
          }}
        >
          {question.tags &&
            question.tags.map(
              (tag, index) =>
                //This line will add a #followed by the tag and
                //keep adding spaces till we reach the end of the array.

                `#${tag}${index === question.tags.length - 1 ? "" : ` `}`
            )}
        </Card.Meta>
        </Grid.Column>
        <Grid.Column textAlign="right" width={5}>

        <Card.Meta textAlign="right"> 
        <Label as='a' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/nan.jpg' />
      {"  "}{question.username}
    </Label>
         </Card.Meta>
        </Grid.Column>
        </Grid>
            </Accordion.Title>

            <AnswersList
              answers={props.answers}
              question={question}
              activeIndex={props.activeIndex}
              handleOnSubmitAnswer={props.handleOnSubmitAnswer}
              handleChange={props.handleChange}
              content={props.content}
              handleAcceptAnswerOnClick={props.handleAcceptAnswerOnClick}
            />
          </Accordion>
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

export default QuestionCard;

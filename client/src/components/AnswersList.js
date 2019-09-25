import React, { Component } from "react";
import AnswerCard from "./AnswersCard";
import { Form, Accordion } from "semantic-ui-react";

const AnswersList = props => {
  const {
    answers,
    question,
    activeIndex,
    handleOnSubmitAnswer,
    handleChange,
    content
  } = props;
  return (
    <Accordion.Content active={activeIndex === question.id}>
      {answers.map(answer => {
        return <AnswerCard question={question} answer={answer} />;
      })}

      <Form onSubmit={handleOnSubmitAnswer}>
        <Form.TextArea
          placeholder="Please write you answer here..."
          required
          minLength={2}
          name="content"
          onChange={handleChange}
          value={content}
          type="text"
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    </Accordion.Content>
  );
};

export default AnswersList;

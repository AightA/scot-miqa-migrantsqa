import React from "react";
import { render } from "@testing-library/react";
import QuestionsContainer from "./QuestionsContainer";
import { getQuestions } from "../api/questions";
import { getAnswers } from "../api/answers";

jest.mock("../api/questions");
jest.mock("../api/answers");

getQuestions.mockImplementation(async () => {
  return [
    {
      id: 9,
      content: "I have been served court papers in regards to parental",
      tags: ["paper"],
      username: "admin",
      date_posted: "2013-12-09T23:00:00.000Z",
      user_id: 1
    },
    {
      id: 5,
      content: "With a zambian passport, my father is British with a British",
      tags: ["zambian"],
      username: "user",
      date_posted: "2019-06-07T22:00:00.000Z",
      user_id: 2
    },
    {
      id: 6,
      content: "هل صحيح انه ينعم بالحرية والامن والامان",
      tags: ["paper"],
      username: "admin",
      date_posted: "2019-04-20T22:00:00.000Z",
      user_id: 1
    },
    {
      id: 4,
      content: "It not might be immigration question. let me explain",
      tags: ["paper"],
      username: "user",
      date_posted: "2018-04-11T22:00:00.000Z",
      user_id: 2
    },
    {
      id: 2,
      content: "My wife and I are arriving in the UK in october and will",
      tags: ["wife"],
      username: "user",
      date_posted: "2015-02-20T23:00:00.000Z",
      user_id: 2
    },
    {
      id: 3,
      content: "I have asked a question here before about visa for an",
      tags: ["visa"],
      username: "admin",
      date_posted: "2014-07-26T22:00:00.000Z",
      user_id: 1
    },
    {
      id: 1,
      content: "I have been served court papers in regards to parental",
      tags: ["paper"],
      username: "admin",
      date_posted: "2013-12-09T23:00:00.000Z",
      user_id: 1
    }
  ];
});

getAnswers.mockImplementation(async () => {
  return [
    {
      user_id: 2,
      username: "user",
      question_id: 3,
      content: "Answer text31 ",
      date_answered: "2019-06-07T22:00:00.000Z"
    }
  ];
});

it("renders without crashing", async () => {
  const component = render(<QuestionsContainer tags={["paper"]} />);
  const { findAllByTestId } = component;

  await findAllByTestId("question");

  expect(component).toMatchSnapshot();
});

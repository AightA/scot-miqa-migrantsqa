import React from "react";
import { render } from "@testing-library/react";
import QuestionCard from "./QuestionCard";

it("Should render a card", () => {
  const { getByTestId } = render(
    <QuestionCard
      answers={[]}
      question={[
        { content: "I have been served court papers in regards to parental" }
      ]}
      userId={1}
      tags={["paper"]}
    />
  );
  expect(getByTestId("cancel-button").textContent).toBe("Cancel");
});

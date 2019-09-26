import React from "react";
import { Feed, Icon } from "semantic-ui-react";

/**
 * 
 *There is a symbol next to every question that users can click to indicate they like the question
- When users click on it, a number underneath the symbol increases by 1
- The score is of course saved into the DB and then retrieved from it
- The symbol should preferably be a thumbs-up outline (search for it among the icons here https://semantic-ui.com/elements/icon.html)
- You can't like your own question

STRETCH GOALS:
- Each user can only click once (each question should not only have a score but also a list of userId's for the users that liked it) 
 */

// onClickUpvoteBtn = () => {
//   //update the previous state, make sure you update this into a class component.
//   //call api to update the backend
// };
const QuestionUpvote = props => (
  <Feed size="large">
    <Feed.Event>
      <Feed.Content>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="chevron circle up" />
            {props.score} Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);

export default QuestionUpvote;

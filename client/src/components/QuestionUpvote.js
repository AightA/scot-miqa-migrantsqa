import React from "react";
import { Feed, Icon } from "semantic-ui-react";

const QuestionUpvote = props => (
  <Feed size="large">
    <Feed.Event>
      {console.log("Props", props.score)}
      <Feed.Content>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="chevron circle up" />4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);

export default QuestionUpvote;

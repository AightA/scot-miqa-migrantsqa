import React from "react";
import { Feed, Icon } from "semantic-ui-react";

const QuestionUpvote = props => {
  const { questionScore, handleOnClickUpvoteBtn } = props;
  //TODO make sure only logged in users can like.
  //TODO make sure user who posted the question not to see the like icon.
  //TODO make sure you handle the upvote and downvote on the backend

  return (
    <Feed size="large">
      <Feed.Event>
        <Feed.Content>
          <Feed.Meta>
            <Feed.Like>
              {console.log(questionScore)}
              <Icon name="chevron circle up" onClick={handleOnClickUpvoteBtn} />
              {questionScore} Likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
};

export default QuestionUpvote;

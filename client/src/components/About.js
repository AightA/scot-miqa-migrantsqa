import React from "react";
import { Container } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
      <div className="content">
        <h2>Q & A</h2>
        <div className="description">
          <p className="paragraph">
            This forum is designed to help the newcomers to Glasgow with any
            qustions they might have.<br></br>
            Make the most of this fantastic webpage by signing up right now.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;

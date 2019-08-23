import React from "react";
import { Container } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
      <div className="content">
        <h2>Q & A</h2>
        <div className="description">
          <p className="text-in-about">
            This forum is designed to help the newcomers to Glasgow with any
            questions they might have.<br></br>
            Make the most of this fantastic webpage by signing up right now.
            <br></br>
            Feel free to ask any questions either in English or your mother
            tongue.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;

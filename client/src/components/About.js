import React from "react";
import { Container } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
      <div class="ui huge header">Q & A</div>
      <p className="text-in-about">
        <p>
          {" "}
          This forum is designed to help the newcomers to Glasgow with any
          questions they might have.
        </p>
        <p>Make the most of this fantastic webpage by signing up right now.</p>
        <p>
          Feel free to ask any questions either in English or your mother
          tongue.
        </p>
      </p>
    </Container>
  );
};

export default About;

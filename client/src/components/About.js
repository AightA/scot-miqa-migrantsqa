import React from "react";
import { Container, Header } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
       <Header as="h2">Q & A</Header>
      <div className="text-in-about">
        <p>
          This forum is designed to help the newcomers to Glasgow with any
          questions they might have.
        </p>
        <p>Make the most of this fantastic webpage by signing up right now.</p>
        <p>
          Feel free to ask any questions either in English or your mother
          tongue.
        </p>
      </div>
    </Container>
  );
};

export default About;

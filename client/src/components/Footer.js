import React from "react";
import "../styles/Footer.css";
import { Segment, Container, Header, List, Grid } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment
      className="footer"
      inverted
      vertical
      style={{ margin: "0em 0em 0em", padding: "1em 0em" }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="MiQA" />
            <List link inverted>
              <List.Item as="a">Nebay</List.Item>
              <List.Item as="a">Reyam</List.Item>
              <List.Item as="a">Ahmed</List.Item>
              <List.Item as="a">Zan</List.Item>
              <List.Item as="a">Saeed</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header inverted as="h4" content="" />
            <p>
              Migrants' Questions and Answers is an open source project, created
              by CodeYourFuture student, hosted on Github. For more information
              about CodeYourFuture, follow the link below.
            </p>
            <p>https://codeyourfuture.io/</p>
            <p>Many thanks to Gabi Lipan for the logo.</p>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;

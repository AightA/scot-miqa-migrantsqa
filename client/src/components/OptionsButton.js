import React from "react";
import { Grid, Header, Dropdown, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default ({ changePassword }) => {
  return (
    <Grid>
      <Grid.Column floated="left" width={6}>
        <Header>
          Options{" "}
          <Header.Content>
            <Dropdown item size="large" icon="options">
              <Dropdown.Menu>
                {changePassword && (
                  <Dropdown.Item as={Link} to="/change-password">
                    <Icon name="lock" color="blue" />
                    Change Password
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Header.Content>
        </Header>
      </Grid.Column>
    </Grid>
  );
};

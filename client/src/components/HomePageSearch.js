import React, { Component } from "react";
import { Search, Grid } from "semantic-ui-react";

const initialState = { isLoading: false, results: [], value: "" };

export default class HomePageSearch extends Component {
  state = initialState;

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid>
        <Search />
      </Grid>
    );
  }
}

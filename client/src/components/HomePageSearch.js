import React, { Component } from "react";
import { Dropdown, Container } from "semantic-ui-react";
import { getQuestions, getQuestionsTags } from "../api/questions";

export default class HomePageSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTags: [],
      questions: [],
      selectedTags: []
    };
  }

  componentDidMount() {
    getQuestions().then(res => {
      this.setState({
        questions: res
      });
    });
    getQuestionsTags().then(res => {
      this.setState({
        filterTags: res
      });
    });
  }

  updatedTagOptions = () => {
    const newFilteredTag = [];
    this.state.filterTags.forEach(tags => {
      return !newFilteredTag.includes(tags) && newFilteredTag.push(tags);
    });
    return newFilteredTag;
  };

  handleSelectedTags = (e, data) => {
    const selectedOptionTags = data.value;
    this.props.getFilteredTags(selectedOptionTags);
  };

  render() {
    const options = this.updatedTagOptions().map((tag, index) => ({
      key: index,
      text: tag,
      value: tag
    }));

    return (
      <Container>
        <Dropdown
          placeholder="Filter by tags"
          fluid
          multiple
          search
          selection
          options={options}
          onChange={this.handleSelectedTags}
        />
      </Container>
    );
  }
}

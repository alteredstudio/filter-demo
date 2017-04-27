import React, { Component } from 'react';
import _ from 'lodash';
import Fuse from 'fuse.js';

import PeopleJSON from '../stubData/10000.json';
import FilterDisplay from './FilterDisplay';
import PersonCard from './PersonCard';

// These should come from elsewhere either as props or as a constant set in env
const options = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: [
    'participantName',
    // 'clientId',
    // 'employeeId',
    // 'accountNumber',
    // 'planAdmin'
  ],
};

export default class FilterContainer extends Component {
  state = { data: PeopleJSON, filteredData: [], filterTerm: '' };

  componentWillMount() {
    const initialData = _.get(this.props.location.state, 'initialData');

    if (initialData) this.setState({ filteredData: PeopleJSON.slice(0, 11) });
  }

  fuseResults = (filterTerm) => {
    const fuse = new Fuse(this.state.data, options);
    const filteredData = fuse
      .search(filterTerm)
      .slice(0, 11);

    this.setState({ filteredData });
  };

  handleChange = (evt) => {
    const filterTerm = evt.target.value;

    this.setState({ filterTerm });
    _.debounce(() => this.fuseResults(filterTerm), 400)();
  };

  render() {
    const title = _.get(this.props.location.state, 'title');

    return (
      <FilterDisplay
        title={title || 'Filter'}
        handleChangeCallback={this.handleChange}
        arrayToRender={this.state.filteredData}
        renderFunction={PersonCard}
      />
    );
  }
}

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

      //peopleFiltered: PeopleJSON.slice(0, 11),

export default class FilterContainer extends Component {
  static defaultProps = {
    filterLimit: 11,
    debounce: 400,
  };

  state = { data: [], filteredData: [], filterTerm: '' };

  fuseResults = (filterTerm) => {
    const { options, filterLimit } = this.props;

    const fuse = new Fuse(this.state.data, options);
    const filteredData = fuse
      .search(filterTerm)
      .slice(0, filterLimit);

    this.setState({ filteredData });
  };

  handleChange = (evt) => {
    const filterTerm = evt.target.value;

    this.setState({ filterTerm });
    _.debounce(() => this.fuseResults(filterTerm), this.props.debounce)();
  };

  render() {
    console.log(this.props);
    return (
      <FilterDisplay
        title={'Search'}
        handleChangeCallback={this.handleChange}
        arrayToRender={this.state.filteredData}
        renderFunction={PersonCard}
      />
    );
  }
}


//static propTypes = {
  //filterLimit: PropTypes.number,
  //debounce: PropTypes.number,
  //options: PropTypes.number.isRequired,
//};

// Plan
//
// Make a component that can be used for filtering data, accepts filterLimit,
// debounce, data, options, renderFunction, and initialData (bool) as props. Will use
// fuse to search passed in data and filter as appropriate. Will render based on
// render function

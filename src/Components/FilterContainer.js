
import React, {Component} from 'react';
import Fuse from 'fuse.js';
import PeopleJSON from './10000.json';
import FilterDisplay from './FilterDisplay';
import _ from 'lodash';

const options = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: [
    "participant_name"
    // "client_id",
    // "employee_id",
    // "account_number",
    // "plan_admin"
  ]
};

export default class FilterContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      people: PeopleJSON,
      peopleFiltered: PeopleJSON.slice(0, 11),
      term: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  fuseResults(term) {
    const fuse = new Fuse(this.state.people, options);
    const filteredResults = fuse
      .search(term)
      .slice(0, 11);
    this.setState({ peopleFiltered: filteredResults });
  }

  handleChange(e) {
    const term = e.target.value;
    this.setState({ term });
    _.debounce(() => this.fuseResults(term), 400)();
  }

  render() {
    return <FilterDisplay peopleFiltered={this.state.peopleFiltered} handleChangeCallback={this.handleChange}/>;
  }
}

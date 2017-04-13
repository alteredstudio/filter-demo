
import React, {Component} from 'react';
import Fuse from 'fuse.js';
import PeopleJSON from './3000.json';

class Filter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      people: PeopleJSON,
      peopleFiltered: PeopleJSON
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ term: e.target.value });

    var options = {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 3,
      keys: [
        "participant_name",
        "client_id",
        "employee_id",
        "account_number",
        "plan_admin"
      ]
    };

    if( e.target.value === ''){
      this.setState({ peopleFiltered: this.state.people });
    } else {
      var fuse = new Fuse(this.state.people, options);
      var filteredResults = fuse
      .search(e.target.value)
      .slice(0, 23);
      this.setState({ peopleFiltered: filteredResults });
    }
  }
  render() {
    return (
      <div>
        <h3><strong>Filter</strong></h3>
        <input type="text" ref="myValue" onChange={ this.handleChange } />
        <br />
        <br />
        <br />
        <div className="row">
          {
            this.state.peopleFiltered.map( person =>
              <div key={person.id} className="col-md-3 margin-bottom-1">
                <div className="card card-lg rounded-md text-center border zoom hover">
                  <div className="card-block">
                    <h5>{person.participant_name}</h5>
                    <p>{person.client_id}</p>
                    <p>{person.employee_id}</p>
                    <p>{person.account_number}</p>
                    <p>{person.plan_admin}</p>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Filter

import React from 'react';
import _ from 'lodash';

const Topic = ({ match }) => (
  <div>
    <h3>{_.get(match.params, 'topicId')}</h3>
  </div>
);

export default Topic;

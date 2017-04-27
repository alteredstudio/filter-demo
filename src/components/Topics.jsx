import React from 'react';

import Topic from './Topic';
import setLinks from '../utils/setLinks';
import setRoutes from '../utils/setRoutes';

const Topics = ({ match }) => {
  const linksConfigArray = [
    {
      path: `${match.url}/rendering`,
      name: 'Rendering with React',
    },
    {
      path: `${match.url}/components`,
      name: 'Components',
    },
    {
      path: `${match.url}/props-v-state`,
      name: 'Props v. State',
    },
  ];

  const topicsRoutes = [
    {
      path: `${match.url}/:topicId`,
      component: Topic,
    },
    {
      path: match.url,
      exact: true,
      render: () => <h3>Please select a topic.</h3>,
    },
  ];

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        { setLinks(linksConfigArray) }
      </ul>
      { setRoutes(topicsRoutes) }
    </div>
  );
};

export default Topics;

//const Topics = ({ match }) => (
  //<div>
    //<h2>Topics</h2>
    //<ul>
      //<li>
        //<Link to={`${match.url}/rendering`}>
          //Rendering with React
        //</Link>
      //</li>
      //<li>
        //<Link to={`${match.url}/components`}>
          //Components
        //</Link>
      //</li>
      //<li>
        //<Link to={`${match.url}/props-v-state`}>
          //Props v. State
        //</Link>
      //</li>
    //</ul>

    //<Route path={`${match.url}/:topicId`} component={Topic}/>
    //<Route exact path={match.url} render={() => (
      //<h3>Please select a topic.</h3>
    //)}/>
  //</div>
//)

//export default Topics

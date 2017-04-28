import Home from './components/Home';
import Topics from './components/Topics';
import About from './components/About';
import FilterContainer from './components/FilterContainer';

// Adding name and to here for the links iteration in Header.jsx is slightly dangerous
// as we ...rest when passing routes into App.jsx so 'name' could pollute the
// <Route /> props

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Home',
  },
  {
    path: '/about',
    component: About,
    name: 'About',
  },
  {
    path: '/search',
    to: {
      pathname: '/search',
      state: {
        title: 'Search',
      },
    },
    component: FilterContainer,
    name: 'Search',
  },
  {
    path: '/filter',
    component: FilterContainer,
    to: {
      pathname: '/filter',
      state: {
        title: 'Filter',
        initialData: true,
      },
    },
    name: 'Filter',
  },
  {
    path: '/topics',
    component: Topics,
    name: 'Topics',
  },
];

export default routes;

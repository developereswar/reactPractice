import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Routing components
import { Templates, EventForm, Header, SideBar, Profile, EventLists, ExpenseApp } from './component/index';

const route = [
  {
    path: '/',
    component: Templates,
    exact: true,
  },
  {
    path: '/template-design',
    component: Templates
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/productionevent/:id',
    component: EventForm,
    exact: true,
  },
  {
    path: '/list',
    component: EventLists,
    exact: true,
  },
  {
    path:'/expenses',
    component:ExpenseApp
  }
]

const AppRoute = () => {
  return (
    <Router>
      <Header />
      <SideBar />
      <switch>
        {route.map((e, i) => {
          return (<Route exact path={e.path} key={i} component={e.component} />);
        })}
      </switch>
    </Router>
  )
}


export default AppRoute;
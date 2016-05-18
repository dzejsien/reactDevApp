import React from 'react'
import { render } from 'react-dom';
import App from './components/main.jsx';
import Projects from './components/projects.jsx'
import Tasks from './components/tasks.jsx'
import MyTasks from './components/myTasks.jsx'
import Users from './components/users.jsx'
import { Router, Route, hashHistory } from 'react-router'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="mytasks" component={MyTasks}/>
      <Route path="projects" component={Projects}/>
      <Route path="tasks" component={Tasks}/>
      <Route path="users" component={Users}/>
    </Route>
  </Router>
), document.getElementById('app'))

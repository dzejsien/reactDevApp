import React, {Component} from 'react';
import { Link } from 'react-router'
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
        <div>
            <Navbar brand="Task management">
                <Nav>
                    <NavItem href="#/mytasks">My tasks</NavItem>
                    <NavItem href="#/projects">Projects</NavItem>
                    <NavItem href="#/tasks">Tasks</NavItem>
                    <NavItem href="#/users">Users</NavItem>
                </Nav>
            </Navbar>

            {this.props.children}
        </div>
    );
  }
}

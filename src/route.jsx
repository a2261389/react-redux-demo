import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const style = {
  default: {
    textDecoration: 'none',
    color: 'grey',
    margin: '5px 10px 5px 10px',
  },
  active: {
    color: 'white',
  },
  noSelect: {
    userSelect: 'none',
  },
};

function MyRoute() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand style={style.noSelect}>Empty</Navbar.Brand>
        <Nav>
          <Nav.Item><NavLink style={style.default} activeStyle={style.active} to="/add">Add Todo</NavLink></Nav.Item>
          <Nav.Item><NavLink style={style.default} activeStyle={style.active} to="/post">Todos</NavLink></Nav.Item>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/add">
          <AddTodo />
        </Route>
        <Route path="/post">
          <TodoList />
        </Route>
      </Switch>
    </Router>
  );
}

export default MyRoute;

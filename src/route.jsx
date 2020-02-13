import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Theme from './contexts/Theme';

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
  const { nowTheme, changeTheme } = React.useContext(Theme);
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand style={style.noSelect}>Empty</Navbar.Brand>
        <Nav>
          <Nav.Item><NavLink style={style.default} activeStyle={style.active} to="/add">Add Todo</NavLink></Nav.Item>
          <Nav.Item><NavLink style={style.default} activeStyle={style.active} to="/post">Todos</NavLink></Nav.Item>
          <Nav.Item style={nowTheme} onClick={() => { changeTheme(nowTheme); }}>Color</Nav.Item>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/add">
          <Row className="justify-content-center mt-5">
            <Col md={{ span: 5 }}>
              <AddTodo />
            </Col>
          </Row>
        </Route>
        <Route path="/post">
          <Row className="justify-content-center mt-5">
            <Col md={{ span: 5 }}>
              <TodoList />
            </Col>
          </Row>
        </Route>
      </Switch>
    </Router>
  );
}

export default MyRoute;

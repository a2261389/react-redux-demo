import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { deleteTodo, updateTodo } from '../../redux/todos';
import Theme from '../../contexts/Theme';

const style = {
  textColor: {
    color: 'white',
  },
  listGroupItem: {
    backgroundColor: '#343A40',
    marginBottom: '0.5rem',
  },
};

function TodoList() {
  const theme = useContext(Theme);
  console.log(`Todo get is: ${JSON.stringify(theme)}`);
  const posts = useSelector((state) => state.todos.posts);
  const dispatch = useDispatch();
  return (
    <Row className="justify-content-center mt-5">
      <Col md={{ span: 8 }}>
        {
          posts.length
            ? posts.map((item) => (
              <ListGroup.Item variant="success" style={style.listGroupItem} key={item.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <div style={style.textColor}>
                    <Form.Check
                      type="checkbox"
                      custom
                      label={<CheckBoxLabel completed={item.completed} name={item.name} />}
                      inline
                      id={`todo-checkbox-${item.id}`}
                      checked={item.completed}
                      onChange={() => { dispatch(updateTodo(item.id)); }}
                    />
                  </div>
                  <Button variant="danger" onClick={() => { dispatch(deleteTodo(item.id)); }}>Delete</Button>
                </div>
              </ListGroup.Item>
            )) : (
              <div className="d-flex justify-content-center">
                <h2>No Todos</h2>
              </div>
            )
        }
      </Col>
    </Row>
  );
}

function CheckBoxLabel({ completed, name }) {
  return (
    <span style={{ textDecoration: (completed ? 'line-through' : '') }}>{name}</span>
  );
}

CheckBoxLabel.propTypes = {
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default TodoList;

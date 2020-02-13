import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaTimes, FaRegClock, FaEdit } from 'react-icons/fa';
import { deleteTodo, updateTodoComplete } from '../../redux/todos';
import Theme from '../../contexts/Theme';
import UpdateTodo from '../UpdateTodo/UpdateTodo';

const DefaultButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

function TodoList() {
  const { nowTheme } = useContext(Theme);
  const [editStatus, setEditStatus] = useState({
    isEditing: false,
    editId: null,
  });
  const posts = useSelector((state) => state.todos.posts);
  const dispatch = useDispatch();
  const handleEdit = (index) => {
    setEditStatus({ editId: index, isEditing: true });
  };
  return (
    <>
      {
        posts.length
          ? posts.map((item, index) => (
            <ListGroup.Item variant="success" style={nowTheme} key={item.id} className="mb-2">
              {
                (editStatus.editId === index && editStatus.isEditing) ? (
                  <UpdateTodo
                    editIndex={index}
                    callback={() => {
                      setEditStatus({ editId: index, isEditing: false });
                    }}
                  />
                ) : (
                  <>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <Form.Check
                          type="checkbox"
                          custom
                          label={<CheckBoxLabel completed={item.completed} text={item.text} />}
                          inline
                          id={`todo-checkbox-${item.id}`}
                          checked={item.completed}
                          onChange={() => { dispatch(updateTodoComplete(item.id)); }}
                        />
                      </div>
                      <h3><FaTimes onClick={() => { dispatch(deleteTodo(item.id)); }} /></h3>
                    </div>
                    <hr style={nowTheme} />
                    <div className="d-flex justify-content-between">
                      <div>
                        <DefaultButton type="button" onClick={() => { handleEdit(index); }}>
                          <h6>
                            <FaEdit />
                            編輯
                          </h6>
                        </DefaultButton>
                      </div>
                      <div className="text-right">
                        <FaRegClock />
                        <small className="ml-1">
                          {item.created_at}
                        </small>
                      </div>
                    </div>
                  </>
                )
              }
            </ListGroup.Item>
          )) : (
            <div className="d-flex justify-content-center">
              <h2>No Todos</h2>
            </div>
          )
      }
    </>
  );
}

function CheckBoxLabel({ completed, text }) {
  return (
    <span style={{ textDecoration: (completed ? 'line-through' : '') }}>{text}</span>
  );
}

CheckBoxLabel.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoList;

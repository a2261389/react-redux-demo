import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { FaTimes, FaRegClock, FaEdit } from 'react-icons/fa';
import { deleteTodo, updateTodoComplete, RootState } from '../../redux/todos';
import Theme from '../../contexts/Theme';
import UpdateTodo from '../UpdateTodo/UpdateTodo';

interface EditStatus {
  isEditing: boolean;
  editId: number | null;
}

interface TodoListFormatter {
  (): JSX.Element;
}

const DefaultButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const TodoList: TodoListFormatter = (): JSX.Element => {
  const { theme } = useContext(Theme);
  const [editStatus, setEditStatus] = useState<EditStatus>({
    isEditing: false,
    editId: null,
  });
  const posts = useSelector((state: RootState) => state.todos.posts);
  const dispatch = useDispatch();
  const handleEdit = (index: number): void => {
    setEditStatus({ editId: index, isEditing: true });
  };
  return (
    <>
      {
        posts.length
          ? posts.map((item, index: number) => (
            <ListGroup.Item variant="success" style={theme} key={item.id} className="mb-2">
              {
                (editStatus.editId === index && editStatus.isEditing) ? (
                  <UpdateTodo
                    editIndex={index}
                    callback={(): void => {
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
                          onChange={(): void => { dispatch(updateTodoComplete(item.id)); }}
                        />
                      </div>
                      <h3><FaTimes onClick={(): void => { dispatch(deleteTodo(item.id)); }} /></h3>
                    </div>
                    <hr style={theme} />
                    <div className="d-flex justify-content-between">
                      <div>
                        <DefaultButton type="button" onClick={(): void => { handleEdit(index); }}>
                          <h6>
                            <FaEdit />
                            編輯
                          </h6>
                        </DefaultButton>
                      </div>
                      <div className="text-right">
                        <FaRegClock />
                        <small className="ml-1">
                          {item.createdAt}
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
};

const CheckBoxLabel = ({ completed, text }: { completed: boolean; text: string }): JSX.Element => (
  <span style={{ textDecoration: (completed ? 'line-through' : '') }}>{text}</span>
);

export default TodoList;

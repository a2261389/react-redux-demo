import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-tw';
import PropTypes from 'prop-types';
import { updateTodo } from '../../redux/todos';

dayjs.locale('zh-tw');

interface InputStatus {
  isValid: boolean;
  isInvalid: boolean;
}

interface EditCallback { (): void }

const UpdateTodo = (
  { editIndex, callback }: { editIndex: number; callback: EditCallback },
): JSX.Element => {
  const [input, setInput] = useState<string>('');
  const [inputStatus, setInputStatus] = useState<InputStatus>({
    isValid: false,
    isInvalid: false,
  });
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!input) {
      setInputStatus({ isValid: false, isInvalid: true });
      return;
    }
    dispatch(updateTodo(editIndex, input));
    setInput('');
    setInputStatus({ isValid: false, isInvalid: false });
    callback();
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
    const isValid = event.target.value !== '';
    setInputStatus({ isValid, isInvalid: !isValid });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Type any todo text.."
            type="text"
            value={input}
            isValid={inputStatus.isValid}
            isInvalid={inputStatus.isInvalid}
            onChange={handleInput}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" type="submit">儲存</Button>
          </InputGroup.Append>
          <Form.Control.Feedback type="invalid">
            <h6>請輸入文字</h6>
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Button variant="outline-secondary" type="button" onClick={(): void => { callback(); }}>取消</Button>
    </Form>
  );
};

UpdateTodo.propTypes = {
  editIndex: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default UpdateTodo;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import { addTodo } from '../../redux/todos';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const [inputStatus, setInputStatus] = useState({
    isValid: false,
    isInvalid: false,
  });
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input) {
      setInputStatus({ isValid: false, isInvalid: true });
      return;
    }
    dispatch(addTodo(input));
    setInput('');
    setInputStatus({ isValid: false, isInvalid: false });
  };

  const handleInput = (event) => {
    setInput(event.target.value);
    if (event.target.value) {
      setInputStatus({ isInvalid: false, isValid: true });
    } else {
      setInputStatus({ isValid: false, isInvalid: true });
    }
  };

  return (
    <Row className="justify-content-center mt-5">
      <Col md={{ span: 8 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col}>
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
                <Button variant="outline-secondary" type="submit">Add</Button>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                <h6>請輸入文字</h6>
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default AddTodo;

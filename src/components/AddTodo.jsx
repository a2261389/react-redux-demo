import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = () => {
  let input;
  const dispatch = useDispatch();
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(addTodo(input));
    }}
    >
      <input type="text" onChange={(e) => { input = e.target.value; }} />
      <button type="submit">Submit</button>
    </form>
  );
};


export default AddTodo;

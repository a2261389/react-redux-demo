import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../actions';

function Post() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  return posts.length ? (
    <>
      {
        posts.map((item) => (
          <div key={item.id}>
            <div>
              {item.name}
              <button type="button" onClick={() => { dispatch(deleteTodo(item.id)); }}>Delete</button>
            </div>
            <div>{item.completed}</div>
          </div>
        ))
      }
    </>
  ) : (
    <div>No Posts</div>
  );
}

export default Post;

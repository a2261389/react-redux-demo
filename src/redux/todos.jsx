const initState = (() => {
  const posts = localStorage.getItem('posts');
  return JSON.parse(posts);
})();

export function todos(state = initState, action) {
  if (action.type === 'ADD_TODO') {
    const newPosts = state.posts.map((post) => post);
    let lastPostId = 1;
    if (state.posts[state.posts.length - 1] !== undefined) {
      lastPostId = state.posts[state.posts.length - 1].id + 1;
    }
    newPosts.push({
      text: action.text,
      id: lastPostId,
      completed: false,
      created_at: action.created_at,
    });

    const newData = { ...state, posts: newPosts };
    localStorage.setItem('posts', JSON.stringify(newData));

    return newData;
  }
  if (action.type === 'DELETE_TODO') {
    const filter = state.posts.filter((post) => action.id !== post.id);
    const filterData = { ...state, posts: filter };
    localStorage.setItem('posts', JSON.stringify(filterData));

    return filterData;
  }

  if (action.type === 'UPDATE_TODO_COMPLETE') {
    const updateCompleteData = {
      ...state,
      posts: state.posts.map(
        (item) => (item.id === action.id ? { ...item, completed: !item.completed } : item),
      ),
    };
    localStorage.setItem('posts', JSON.stringify(updateCompleteData));

    return updateCompleteData;
  }

  if (action.type === 'UPDATE_TODO') {
    const updateData = {
      ...state,
      posts: state.posts.map(
        (post, index) => (index !== action.index ? post : { ...post, text: action.text }),
      ),
    };
    localStorage.setItem('posts', JSON.stringify(updateData));

    return updateData;
  }

  return state;
}

export const addTodo = (text, time) => ({
  type: 'ADD_TODO',
  created_at: time,
  text,
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id,
});

export const updateTodoComplete = (id) => ({
  type: 'UPDATE_TODO_COMPLETE',
  id,
});

export const updateTodo = (index, text) => ({
  type: 'UPDATE_TODO',
  index,
  text,
});

const initState = {
  posts: [
    {
      id: 1,
      name: '早起倒垃圾',
      completed: true,
    },
  ],
  user: [],
};

export function todos(state = initState, action) {
  if (action.type === 'ADD_TODO') {
    const newPosts = state.posts.map((post) => post);
    let lastPostId = 1;
    if (state.posts[state.posts.length - 1] !== undefined) {
      lastPostId = state.posts[state.posts.length - 1].id + 1;
    }
    newPosts.push({
      name: action.text,
      id: lastPostId,
      completed: false,
    });
    return { ...state, posts: newPosts };
  }
  if (action.type === 'DELETE_TODO') {
    const filter = state.posts.filter((post) => action.id !== post.id);
    return { ...state, posts: filter };
  }

  if (action.type === 'UPDATE_TODO') {
    return {
      ...state,
      posts: state.posts.map(
        (item) => (item.id === action.id ? { ...item, completed: !item.completed } : item),
      ),
    };
  }

  return state;
}

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text,
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id,
});

export const updateTodo = (id) => ({
  type: 'UPDATE_TODO',
  id,
});

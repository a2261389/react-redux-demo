const initState = {
  posts: [
    {
      id: 1,
      name: 'Sleep',
      completed: false,
    },
  ],
  user: [],
};

const todos = (state = initState, action) => {
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

  return state;
};

export default todos;

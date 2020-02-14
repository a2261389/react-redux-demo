const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_TODO_COMPLETE = 'UPDATE_TODO_COMPLETE';

export interface Post {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

export interface PostState {
  posts: Post[];
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  text: string;
  createdAt: string;
}

export interface UpdateTodoAction {
  type: typeof UPDATE_TODO;
  text: string;
  index: number;
}

export interface UpdateTodoCompleteAction {
  type: typeof UPDATE_TODO_COMPLETE;
  id: number;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: number;
}

export interface RootState {
  todos: PostState;
}

type TodoAction = AddTodoAction | UpdateTodoAction | UpdateTodoCompleteAction | DeleteTodoAction

const initState = ((): PostState => {
  const posts = localStorage.getItem('posts');
  return posts === null ? { posts: [] } : JSON.parse(posts);
})();

export function todos(state = initState, action: TodoAction): PostState {
  if (action.type === ADD_TODO) {
    const newPosts = state.posts.map((post) => post);
    let lastPostId = 1;
    if (state.posts[state.posts.length - 1] !== undefined) {
      lastPostId = state.posts[state.posts.length - 1].id + 1;
    }
    newPosts.push({
      text: action.text,
      id: lastPostId,
      completed: false,
      createdAt: action.createdAt,
    });

    const newData = { ...state, posts: newPosts };
    localStorage.setItem('posts', JSON.stringify(newData));

    return newData;
  }
  if (action.type === DELETE_TODO) {
    const filter = state.posts.filter((post) => action.id !== post.id);
    const filterData = { ...state, posts: filter };
    localStorage.setItem('posts', JSON.stringify(filterData));

    return filterData;
  }

  if (action.type === UPDATE_TODO_COMPLETE) {
    const updateCompleteData = {
      ...state,
      posts: state.posts.map(
        (item) => (item.id === action.id ? { ...item, completed: !item.completed } : item),
      ),
    };
    localStorage.setItem('posts', JSON.stringify(updateCompleteData));

    return updateCompleteData;
  }

  if (action.type === UPDATE_TODO) {
    const updateData = {
      ...state,
      posts: state.posts.map(
        (post, index: number) => (index !== action.index ? post : { ...post, text: action.text }),
      ),
    };
    localStorage.setItem('posts', JSON.stringify(updateData));

    return updateData;
  }

  return state;
}

export const addTodo = (text: string, time: string): object => ({
  type: ADD_TODO,
  createdAt: time,
  text,
});

export const deleteTodo = (id: number): object => ({
  type: DELETE_TODO,
  id,
});

export const updateTodoComplete = (id: number): object => ({
  type: UPDATE_TODO_COMPLETE,
  id,
});

export const updateTodo = (index: number, text: string): object => ({
  type: UPDATE_TODO,
  index,
  text,
});

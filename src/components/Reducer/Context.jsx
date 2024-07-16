
import React, { createContext, useReducer } from 'react';

const initialState = {
  todos: []
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
      case 'EDIT_TODO':
        return {
            ...state,
            todos: state.todos.map(todo =>
              todo.id === action.payload.id
                ? { ...todo, text: action.payload.text, name: action.payload.name }
                : todo
            )
        };
    default:
      return state;
  }
};

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };

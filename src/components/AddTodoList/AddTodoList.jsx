import React, { useState, useContext } from 'react';
import { TodoContext } from '../Reducer/Context';

const AddTodo = () => {
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const { dispatch} = useContext(TodoContext);

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text,name } });
    setText('');
    setName('')
  };


  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={text}
        required
        onChange={(e) => setText(e.target.value)}
        placeholder="Name"
      />  <input
      type="text"
      value={name}
      required
      onChange={(e) => setName(e.target.value)}
      placeholder="SurName"
    />
      <button type="submit">Add</button>
    
    </form>
  );
};

export default AddTodo;

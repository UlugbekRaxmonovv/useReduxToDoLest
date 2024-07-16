
import React, { useContext, useState } from 'react';
import { TodoContext } from '../Reducer/Context';
import './TodoList.css'
const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const [editTexs, setEditTexts] = useState('');



  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
    setEditTexts(todo.name);
  };

  const saveEdit = (id) => {
    dispatch({ type: 'EDIT_TODO', payload: { id, text: editText, name: editTexs } });
    setEditId(null);
    setEditText('');
    setEditTexts('');
  };
  return (
    <table>
    <tr>
      <th>№</th>
      <th>Name</th>
      <th>SurName</th>
      <th>Delet</th>
    </tr>
    {state.todos.map((todo,inx) => (
          <tr key={inx.id}>
            {editId === todo.id ? (
               <>
               <div className="overlay" onClick={() =>setEditId(null)}></div>
                <div className="hammasi_all">
              <div className="hammasi_row">
              <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                /> <br />
                 <input
                  type="text"
                  value={editTexs}
                  onChange={(e) => setEditTexts(e.target.value)}
                /> <br />
                <button onClick={() => saveEdit(todo.id)}>Save</button>
              </div>
                </div>
               </>
            ) : (
                <>
                <td>{inx + 1}</td>
                <td>{todo.text}</td>
                <td>{todo.name}</td>
               <td>     <button onClick={() => handleEdit(todo)}>Edit</button>
                <button  onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>Delete</button></td>
                </>
   
            )}
          </tr>
        ))}
  </table>
  );
};

export default TodoList;

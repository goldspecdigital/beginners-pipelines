import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const onInput = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, todo])
    setTodo('')
  };

  return (
    <div className="App">
      <h1>Todo List</h1>

      <form onSubmit={onSubmit}>
        <input type="text" value={todo} onChange={onInput} />
        <button type="submit">Add todo</button>
      </form>

      <ul>
        {todoList.map((todo, index) =>
          <li key={index} className="App-Todo">{todo}</li>
        )}
      </ul>
    </div>
  );
}

export default App;

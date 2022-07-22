import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  // title binding
  const todoTitle = useRef();

  // apply life cycle hook
  useEffect(() => {
    const availableTodos = localStorage.getItem('todos');
    setTodos(availableTodos ? JSON.parse(availableTodos) : []);

  }, []);


  // add todo function
  function addTodo(event) {
    event.preventDefault();
    const next = [...todos, todoTitle.current.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }

  // react is state management 
  // framework
  // state of todos and update function
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input ref={todoTitle} />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  )

}

export default App;

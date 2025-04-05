import './index.css';
import { useState } from 'react';

import Header from './components/Header';
import TodoForm from './components/TodoForm';

function App() {
    const [input,setInput] = useState(''); // Must capture keystrokes
    const [todos,setTodos] = useState([]) // The Todos will be store in an array

    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleSubmit(submitEvent) {
        const newTodo = {
            id: Date.now(),     // unique identifier
            text: input,        // the task
        };
        submitEvent.preventDefault();
        setTodos([...todos,newTodo])
        setInput('');
    }
    function handleDelete(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
      <div className="min-h-screen p-6">
          <Header />
          <TodoForm
              input={input}
              setInput={setInput}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
          />

          <section className="px-4 py-6">
              <ul className="space-y-4">
                  {todos.map(todo => (
                      <li
                          key={todo.id}
                          className="bg-white shadow-lg text-purple-800 font-bold
             rounded-full px-10 py-6 w-full max-w-2xl mx-auto text-2xl
             flex items-center justify-between hover:scale-105 transition-all"
                      >
                          <span>{todo.text}</span>
                          <button
                              onClick={() => handleDelete(todo.id)}
                              className="text-red-500 hover:text-red-700 text-3xl"
                          >
                              🗑
                          </button>
                      </li>
                  ))}
              </ul>
          </section>


      </div>
  )
}

export default App

// src/App.tsx
import React from 'react'
import Counter from './components/Counter'
import UsersList from './components/UsersList'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { addTodo, toggleTodo, removeTodo } from './features/todos/todosSlice'
import TodosList from './components/TodoList'

export default function App() {
  const todos = useAppSelector((state) => state.todos.items)
  const dispatch = useAppDispatch()

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Redux Toolkit Demo</h1>

      <section>
        <h2>Counter</h2>
        <Counter />
      </section>

      <section>
        <UsersList />
      </section>

      <section>
        <h2>Todos</h2>
        <button onClick={() => dispatch(addTodo('Learn Redux Toolkit'))}>
          Add Todo
        </button>
        <ul>
          {todos.map((t) => (
            <li key={t.id}>
              <span
                style={{
                  textDecoration: t.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
                onClick={() => dispatch(toggleTodo(t.id))}
              >
                {t.text}
              </span>
              <button onClick={() => dispatch(removeTodo(t.id))}>Remove</button>
            </li>
          ))}
        </ul>
      </section>
      <TodosList />
    </div>
  )
}

// src/components/TodosList.tsx
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addTodo, toggleTodo, removeTodo } from '../features/todos/todosSlice'

export default function TodosList() {
  const [text, setText] = useState('')
  const todos = useAppSelector((state) => state.todos.items)
  const dispatch = useAppDispatch()

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text))
      setText('')
    }
  }

  return (
    <div>
      <h2>Todos</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>
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
    </div>
  )
}

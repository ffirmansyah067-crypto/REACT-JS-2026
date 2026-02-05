// src/features/todos/todosSlice.ts
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodosState {
  items: Todo[]
}

const initialState: TodosState = {
  items: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      }
      state.items.push(newTodo)
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find((t) => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((t) => t.id !== action.payload)
    },
  },
})

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions
export default todosSlice.reducer

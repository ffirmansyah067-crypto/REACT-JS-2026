// src/components/Counter.tsx
import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { increment, decrement, reset } from '../features/counter/counterSlice'

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h2>Counter</h2>
      <p>Value: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

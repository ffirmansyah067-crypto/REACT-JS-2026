import React, { useReducer } from 'react';

// 1. Fungsi Reducer
// Menerima state saat ini dan sebuah action
// Mengembalikan state yang baru
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

function CounterWithReducer() {
  // 2. Menggunakan useReducer
  // counterState: variabel state saat ini
  // dispatch: fungsi untuk mengirim action
  // counterReducer: fungsi reducer yang akan digunakan
  // { count: 0 }: nilai awal state
  const [counterState, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>Counter dengan useReducer</h2>
      <p>Count: {counterState.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Tambah</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Kurang</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default CounterWithReducer;
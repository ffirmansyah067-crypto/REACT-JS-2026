import { useState, useCallback, lazy, Suspense } from "react";

// Lazy load Child
const Child = lazy(() => import("./components/Child"));

function ExpensiveComponent({ count }) {
  console.log("ExpensiveComponent rendered");

  // Simulasi perhitungan berat
  let result = 0;
  for (let i = 0; i < 10000000; i++) {
    result += Math.sqrt(i * count);
  }

  return <p>Expensive calculation result: {result}</p>;
}

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  console.log("Parent rendered");

  const handleChildClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React.memo + useCallback + Lazy Loading + Profiling Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br /><br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br /><br />
      {/* Bungkus Child dengan Suspense */}
      <Suspense fallback={<p>Loading Child...</p>}>
        <Child text={text} onClick={handleChildClick} />
      </Suspense>
      <br /><br />
      {/* Tambahan komponen berat untuk profiling */}
      <ExpensiveComponent count={count} />
    </div>
  );
}

export default App;

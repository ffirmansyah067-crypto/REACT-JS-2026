import React, { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Buat AbortController untuk request ini
    const controller = new AbortController();
    const signal = controller.signal;

    // Lakukan fetch dengan signal
    fetch("https://jsonplaceholder.typicode.com/posts", { signal })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        // Abaikan error jika request dibatalkan
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      });

    // Cleanup: batalkan request saat komponen di-unmount
    return () => {
      controller.abort();
    };
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.slice(0, 5).map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default DataFetcher;

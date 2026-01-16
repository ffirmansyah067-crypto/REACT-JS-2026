import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchAxios() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

    return (
      <div>
        <h1>Data dari Axios</h1>
        <p>{data.name}</p>
        <p>{data.email}</p>
      </div>
    );  
}

export default FetchAxios
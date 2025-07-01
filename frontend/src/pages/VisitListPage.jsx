// src/pages/VisitListPage.jsx
import React, { useState, useEffect } from 'react';
import { fetchVisits } from '../api/visitService';

export default function VisitListPage() {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVisits()
      .then(res => setVisits(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>로딩중…</p>;
  if (error)   return <p style={{ color: 'red' }}>에러: {error}</p>;

  return (
    <div>
      <h1>방문지 목록</h1>
      <ul>
        {visits.map(v => (
          <li key={v.id}>
            {v.latitude} , {v.longitude}
          </li>
        ))}
      </ul>
    </div>
  );
}

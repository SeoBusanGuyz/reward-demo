// src/App.jsx

import React, { useState } from 'react';
import { useInitialLocation } from './hooks/useInitialLocation';
import { useLocationTracker } from './hooks/useLocationTracker';

export default function App() {
  const { initialPos, error } = useInitialLocation();
  const [visited, setVisited] = useState(false);

  const handleReset = newPos => {
    // localStorage 값도 초기화
    localStorage.setItem('initialPos', JSON.stringify({ lat: newPos[0], lng: newPos[1] }));
    // 필요 시 UI 갱신 등
  };

  const handleVisit = visitData => {
    alert('방문처리!');
    setVisited(true);
    // 백엔드에 기록할 때 호출해도 좋음
    // fetch('/api/visits', { method:'POST', body: JSON.stringify(visitData) })
  };

  const { currentPos } = useLocationTracker(
    initialPos,
    handleVisit,
    handleReset
  );

  if (error) return <div>위치 정보를 가져올 수 없습니다: {error}</div>;
  if (!initialPos) return <div>위치를 확인 중입니다…</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>위치 기반 방문 처리</h1>
      <p>초기 위치: {initialPos.lat.toFixed(5)}, {initialPos.lng.toFixed(5)}</p>
      <p>현재 위치: {currentPos?.[0].toFixed(5)}, {currentPos?.[1].toFixed(5)}</p>
      {visited && <p style={{ color: 'green' }}>방문이 처리되었습니다!</p>}
    </div>
  );
}

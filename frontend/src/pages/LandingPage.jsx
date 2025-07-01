// src/pages/LandingPage.jsx

import React, { useState, useEffect } from 'react';
import useInitialLocation from '../hooks/useInitialLocation';
import useLocationTracker from '../hooks/useLocationTracker';
import { createVisit } from '../api/visitService';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  // 1) 초기 위치 가져오기
  const { initialPos, error: locError, setInitialPos } = useInitialLocation();
  const [msg, setMsg] = useState(null);
  const navigate = useNavigate();

  // 2) 자동 방문 처리 콜백
  const handleAutoVisit = async ({ latitude, longitude }) => {
    try {
      await createVisit({ lat: latitude, lng: longitude });
      setMsg('✅ 자동 방문 처리 완료!');
    } catch (e) {
      console.error(e);
      setMsg('❌ 자동 방문 처리 중 에러 발생');
    }
  };

  // 3) 위치 범위(1km) 벗어났을 때 초기화 콜백
  const handleReset = (newPos) => {
    const coords = { lat: newPos[0], lng: newPos[1] };
    setMsg('⚠️ 1km 벗어나 초기 위치를 다시 설정합니다.');
    setInitialPos(coords);
    localStorage.setItem('initialPos', JSON.stringify(coords));
  };

  // 4) 위치 트래커 훅 실행 (5초마다 위치 체크 → 3회 연속 1km 이내면 onVisit 호출)
  const { currentPos } = useLocationTracker(
    initialPos,
    handleAutoVisit,
    handleReset
  );

  // 5) 메시지는 3초 뒤 자동으로 사라지게
  useEffect(() => {
    if (!msg) return;
    const id = setTimeout(() => setMsg(null), 3000);
    return () => clearTimeout(id);
  }, [msg]);

  // 에러 / 로딩 상태 처리
  if (locError) return <p>위치 정보를 가져올 수 없습니다: {locError}</p>;
  if (!initialPos) return <p>위치 불러오는 중…</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>어서 와, PWA 방문 서비스!</h1>

      {/* 현재 추적 중인 위치 */}
      {currentPos ? (
        <p>
          현재 위치: {currentPos[0].toFixed(5)} /{' '}
          {currentPos[1].toFixed(5)}
        </p>
      ) : (
        <p>위치 추적 준비 중…</p>
      )}

      {/* 자동 방문 처리 결과 메시지 */}
      {msg && (
        <div style={{ margin: '20px 0', color: msg.startsWith('❌') ? 'red' : 'green' }}>
          {msg}
        </div>
      )}

      {/* 방문 목록 페이지로 이동 */}
      <button onClick={() => navigate('/list')}>
        방문 목록 보러 가기
      </button>
    </div>
  );
}

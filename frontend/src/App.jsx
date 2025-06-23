import { useState, React } from 'react'
import { useInitialLocation } from './hooks/useInitialLocation'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const { initialPos, error } = useInitialLocation();

  if (error) return <div>위치 정보를 가져올 수 없습니다: {error}</div>;
  if (!initialPos) return <div>위치를 확인 중입니다…</div>;

  return (
    <div>
      <h1>초기 위치 인식 완료!</h1>
      <p>위도: {initialPos.lat}, 경도: {initialPos.lng}</p>
      {/* 이후 1분 주기 로직을 붙여 가면 됩니다 */}
    </div>
  );
}

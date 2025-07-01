// src/api/visitService.js
import client from './client';

// 방문 기록 가져오기
export function fetchVisits() {
  return client.get('/api/visits');
}

// 방문 처리
export function createVisit({ lat, lng }) {
    return client.post('/api/visits', { latitude: lat, longitude: lng });
  }
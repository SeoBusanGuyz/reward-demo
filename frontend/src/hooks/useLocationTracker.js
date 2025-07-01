// src/hooks/useLocationTracker.js

import { useState, useEffect, useRef } from 'react';
import { haversine } from '../utils/haversine';

function useLocationTracker(initialPos, onVisit, onReset) {
  const [currentPos, setCurrentPos] = useState(
    initialPos ? [initialPos.lat, initialPos.lng] : null
  );
  const countRef = useRef(0);
  const intervalRef = useRef(null);

const INTERVAL_MS = 5 * 1000;
const VISIT_TRIGGER_COUNT = 3;

  useEffect(() => {
    if (!initialPos) return; // 초기 위치 없으면 대기

    // 1분마다 실행
    intervalRef.current = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const now = [pos.coords.latitude, pos.coords.longitude];
          setCurrentPos(now);

          const dist = haversine(
            [initialPos.lat, initialPos.lng],
            now
          );

          if (dist > 1) {
            // 1km 벗어나면 초기화
            countRef.current = 0;
            onReset && onReset(now);
          } else {
            countRef.current += 1;
            if (countRef.current >= VISIT_TRIGGER_COUNT
            ) {
              // 5분(=5회) 조건 만족 → 방문 처리
              onVisit && onVisit({ latitude: now[0], longitude: now[1] });
              clearInterval(intervalRef.current);
            }
          }
        },
        err => {
          console.error('위치 갱신 실패:', err);
        }
      );
    }, INTERVAL_MS);

    return () => clearInterval(intervalRef.current);
  }, [initialPos, onVisit, onReset]);

  return { currentPos };
}

export default useLocationTracker;
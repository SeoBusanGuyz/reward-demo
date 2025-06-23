import { useState, useEffect } from 'react';

export function useInitialLocation() {
  const [initialPos, setInitialPos] = useState(() => {
    const saved = localStorage.getItem('initialPos');
    return saved ? JSON.parse(saved) : null;
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialPos) return; // 이미 받아온 게 있으면 스킵

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      pos => {
        const coords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setInitialPos(coords);
        localStorage.setItem('initialPos', JSON.stringify(coords));
      },
      err => {
        setError(err.message);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, [initialPos]);

  return { initialPos, error };
}

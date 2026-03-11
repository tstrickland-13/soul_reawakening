import { useState, useEffect } from 'react';

export default function useYouTubeVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchVideos() {
      try {
        const res = await fetch("/.netlify/functions/youtube-videos");
        if (!res.ok) throw new Error("Failed to load videos");
        const data = await res.json();
        if (!cancelled) {
          setVideos(data.videos || []);
        }
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchVideos();
    return () => { cancelled = true; };
  }, []);

  return { videos, loading, error };
}

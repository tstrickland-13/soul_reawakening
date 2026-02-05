import { useState, useEffect, useRef } from "react";

/**
 * Hook for scroll-triggered reveal animations
 * @param {number} threshold - Visibility threshold (0-1)
 * @returns {[React.RefObject, boolean]} - Ref to attach and visibility state
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default useScrollReveal;

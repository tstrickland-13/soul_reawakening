import { useState, useEffect } from "react";

/**
 * Hook to track scroll position
 * @param {number} threshold - Scroll threshold to trigger "scrolled" state
 * @returns {boolean} - Whether page has scrolled past threshold
 */
export function useScrollPosition(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Check initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}

export default useScrollPosition;

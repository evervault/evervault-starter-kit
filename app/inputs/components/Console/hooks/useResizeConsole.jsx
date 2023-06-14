'use client';
import { useEffect, useState } from 'react';

export default function useResizeConsole() {
  const [isResizing, setIsResizing] = useState(false);
  const [height, setHeight] = useState(null);
  const [mobileExpand, setMobileExpand] = useState(false);

  function startResizing() {
    setIsResizing(true);
  }

  function resize(event) {
    if (!isResizing || typeof window === 'undefined') return;
    const resizeHandleOffset = 8;
    const newHeight = Math.min(
      Math.max(window.innerHeight - event.clientY + resizeHandleOffset, 40),
      window.innerHeight
    );
    setHeight(newHeight);
  }

  function stopResizing() {
    setIsResizing(false);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight / 5);
      document.addEventListener('mousemove', resize);
      document.addEventListener('mouseup', stopResizing);
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResizing);
      }
    };
  }, [isResizing]);

  function toggleMobileExpand() {
    setMobileExpand(!mobileExpand);
    if (typeof window !== 'undefined') {
      setHeight(mobileExpand ? window.innerHeight / 5 : window.innerHeight / 2);
    }
  }

  return { startResizing, height, isResizing, toggleMobileExpand };
}

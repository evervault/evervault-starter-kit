'use client';
import { useEffect, useState } from 'react';

export default function useResizeConsole() {
  const [isResizing, setIsResizing] = useState(false);
  const [height, setHeight] = useState(150);
  const [mobileExpand, setMobileExpand] = useState(false);

  function startResizing() {
    setIsResizing(true);
  }

  function resize(event) {
    if (!isResizing) return;
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
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResizing);

    return () => {
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing]);

  function toggleMobileExpand() {
    setMobileExpand(!mobileExpand);
    setHeight(mobileExpand ? 500 : 150);
  }

  return { startResizing, height, isResizing, toggleMobileExpand };
}

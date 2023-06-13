import { useEffect, useState } from 'react';

export default function useResizeConsole() {
  const [isResizing, setIsResizing] = useState(false);
  const [height, setHeight] = useState(window.innerHeight / 5);
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
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);

    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing]);

  function toggleMobileExpand() {
    setMobileExpand(!mobileExpand);
    setHeight(mobileExpand ? window.innerHeight / 5 : window.innerHeight / 2);
  }

  return { startResizing, height, isResizing, toggleMobileExpand };
}

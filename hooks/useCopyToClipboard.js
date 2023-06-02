import { useRef, useState, useCallback } from 'react';

export default function useCopyToClipboard() {
  const timer = useRef();
  const [copied, setCopied] = useState(false);

  const copy = useCallback((content) => {
    if (timer.current) clearTimeout(timer.current);
    navigator.clipboard.writeText(content.trimEnd());
    setCopied(true);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }, []);

  return { copy, copied };
}

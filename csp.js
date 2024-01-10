const CSPS = {
  "default-src": ["'none'"],
  "script-src": [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    "https://*.evervault.com",
    "https://*.plausible.io",
    "https://vercel.live/",
    "https://vercel.com",
  ],
  "style-src": ["'self'", "'unsafe-inline'"],
  "img-src": [
    "'self'",
    "blob:",
    "data:",
    "https://vercel.live/",
    "https://vercel.com",
    "https://sockjs-mt1.pusher.com/",
  ],
  "connect-src": [
    "'self'",
    "https://*.evervault.com",
    "https://*.plausible.io",
    "https://vercel.live/",
    "https://vercel.com",
    "https://sockjs-mt1.pusher.com/",
    "wss://ws-mt1.pusher.com/",
  ],
  "frame-src": [
    "'self'",
    "https://*.evervault.com",
    "https://vercel.live/",
    "https://vercel.com",
  ],
  "worker-src": ["'self'", "https://*.evervault.com"],
  "font-src": ["'self'", "https://fonts.gstatic.com"],
  "form-action": ["'self'"],
  "media-src": ["'self'"],
  "manifest-src": ["'self'"],
};

module.exports = Object.entries(CSPS)
  .map(([key, value]) => `${key} ${value.join(" ")}`)
  .join("; ");

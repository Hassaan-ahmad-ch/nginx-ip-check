const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.type('html').send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nginx IP Check</title>
  <style>
    body { font: 16px system-ui, sans-serif; max-width: 760px; margin: 40px auto; padding: 0 20px; background: #f5f7fa; color: #172033; }
    h1 { font-size: 1.8rem; }
    a { color: #075ec8; }
    .card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 12px #0001; }
    code { overflow-wrap: anywhere; }
  </style>
</head>
<body>
  <h1>Nginx Visitor IP Check</h1>
  <div class="card">
    <p>Use this temporary app to inspect the headers received by Node.js.</p>
    <p><a href="/debug-ip">View IP diagnostics (JSON)</a></p>
    <p><a href="/health">Check application health</a></p>
  </div>
</body>
</html>`);
});

app.get('/debug-ip', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({
    remoteAddress: req.socket.remoteAddress,
    xForwardedFor: req.get('x-forwarded-for') || null,
    xRealIp: req.get('x-real-ip') || null,
    xForwardedProto: req.get('x-forwarded-proto') || null,
    note: 'Forwarded headers can be spoofed unless trusted proxies are configured.'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`IP check app listening on port ${PORT}`);
});

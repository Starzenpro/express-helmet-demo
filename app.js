const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Express Security Demo</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        h1 { color: #2c3e50; }
        li { margin: 10px 0; }
        code { background: #f0f0f0; padding: 2px 5px; }
      </style>
    </head>
    <body>
      <h1>Express Security Headers Demo</h1>
      <p>Helmet is actively protecting this application with security headers</p>
      
      <h2>Enabled Security Features:</h2>
      <ul>
        <li>Content Security Policy (CSP)</li>
        <li>X-Frame-Options (Clickjacking protection)</li>
        <li>Strict-Transport-Security (HSTS)</li>
        <li>X-Content-Type-Options (MIME sniffing prevention)</li>
        <li>X-XSS-Protection (Cross-site scripting filter)</li>
        <li>Referrer-Policy</li>
      </ul>
      
      <h3>Verify headers with:</h3>
      <code>curl -I ${window.location.origin}</code>
    </body>
    </html>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🔒 Security headers enabled via Helmet`);
});

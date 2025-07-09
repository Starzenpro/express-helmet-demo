// Load required modules
const express = require('express');
const helmet = require('helmet');

// Create Express application
const app = express();

// Apply Helmet security headers
app.use(helmet());

// Define root route
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
      
      <h3>Try inspecting headers with:</h3>
      <code>curl -I https://${process.env.GITPOD_WORKSPACE_URL.replace('://', '://3000-')}</code>
    </body>
    </html>
  `);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🔒 Security headers enabled via Helmet`);
  console.log(`🌐 Open Preview: https://${PORT}-${process.env.GITPOD_WORKSPACE_URL.replace('https://', '')}`);
});
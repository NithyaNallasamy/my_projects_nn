const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: sans-serif; text-align: center; padding: 4rem; background: #090d16; color: #38bdf8;">
      <h1>🐳 Phase 3, Project 1 Complete!</h1>
      <p>Running inside an optimized, multi-stage <strong>Docker Container</strong>.</p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});

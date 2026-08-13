const express = require('express');
const { createClient } = require('redis');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to Redis using the Docker Compose service name 'redis-db'
const REDIS_HOST = process.env.REDIS_HOST || 'redis-db';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});

client.on('error', (err) => console.error('Redis Client Error:', err));

async function startServer() {
  await client.connect();
  console.log(`Connected successfully to Redis at ${REDIS_HOST}:${REDIS_PORT}`);

  app.get('/', async (req, res) => {
    // Increment visit counter in Redis
    const visits = await client.incr('page_visits');

    res.send(`
      <div style="font-family: sans-serif; text-align: center; padding: 4rem; background: #0f172a; color: #38bdf8;">
        <h1>🐳 Phase 3, Project 2: Docker Compose Multi-Container Setup!</h1>
        <p style="font-size: 1.5rem; color: #f43f5e;">Total Page Visits: <strong>${visits}</strong></p>
        <p>This web container communicates seamlessly with the isolated <strong>Redis Database</strong> container via custom Docker Networking!</p>
      </div>
    `);
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
# ==========================================
# STAGE 1: Build & Dependency Stage
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency declarations
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# ==========================================
# STAGE 2: Lightweight Production Runtime
# ==========================================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy cached node_modules from builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copy app source code
COPY . .

# Security: Run as non-root user
USER node

EXPOSE 3000

CMD ["node", "server.js"]

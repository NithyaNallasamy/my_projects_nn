FROM python:3.11-slim
# 2. Working directory inside container
WORKDIR /app
# 3. Cache and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 4. Copy application source code
COPY app/ ./app

# 5. Expose port 5000
EXPOSE 5000

# 6. Run the application
CMD ["python", "app/main.py"]

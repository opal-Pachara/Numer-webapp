from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector, json, random, os, time

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

DB_CONFIG = {
    "host": os.getenv("DATABASE_HOST", "host.docker.internal"),
    "user": os.getenv("DATABASE_USER", "root"),
    "password": os.getenv("DATABASE_PASSWORD", "root"),
    "database": os.getenv("DATABASE_NAME", "numerlical_db"),
    "port": int(os.getenv("DATABASE_PORT", 3306)),
    "connection_timeout": 5,
}

def get_connection_with_retry(retries=10, delay=3):
    for attempt in range(retries):
        try:
            conn = mysql.connector.connect(**DB_CONFIG)
            if conn.is_connected():
                return conn
        except Exception as e:
            print(f"[DB] attempt {attempt+1}/{retries} failed: {e}")
            time.sleep(delay)
    raise RuntimeError("Cannot connect to MySQL after retries")

@app.get("/equation/random/{method_name}")
def random_equation(method_name: str):
    try:
        conn = get_connection_with_retry()
        cur = conn.cursor(dictionary=True)
        cur.execute("SELECT * FROM equations WHERE method_name=%s", (method_name,))
        rows = cur.fetchall()
        cur.close()
        conn.close()

        if not rows:
            return {"error": f"No equations found for method '{method_name}'"}

        chosen = random.choice(rows)
        raw = chosen.get("inputs")

        try:
            inputs = json.loads(raw) if isinstance(raw, str) else raw
        except json.JSONDecodeError:
            inputs = {}

        return {
            "id": chosen["id"],
            "method_name": chosen["method_name"],
            "equation_text": chosen["equation_text"],
            "inputs": inputs
        }

    except Exception as e:
        return {"error": str(e)}

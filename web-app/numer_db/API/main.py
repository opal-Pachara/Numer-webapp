from fastapi import FastAPI
from fastapi.middleware.cors import CROSMiddleWare
import mysql.connector,json,random

app = FastAPI()

app.middleware(
    CROSMiddleWare,
    allow_orgins=["http://localhost:5173"],
    allow_credential=True,
    allow_methods=["*"],
    allow_header=["*"]
)

DB_CONFIG = {
    "host":"localhost",
    "user": "root",
    "password": "root",
    "database": "numerlical_db",
    "port": 3306
}

def get_connection():
        return mysql.connector.connect(**DB_CONFIG)

@app.get("equation/random/{method_name}")
def random_equetion(method_name:str):
    conn = get_connection()
    cur = conn.cursor(dictionary=True)
    cur.execute("SELECT * FROM equations WHERE method_name=%s", (method_name,))
    rows = cur.fetchall()
    cur.close()
    conn.close()

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
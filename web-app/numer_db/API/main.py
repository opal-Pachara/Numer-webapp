from fastapi import FastAPI ,HTTPException
from fastapi.middleware.cors import CORSMiddleware
import _mysql_connector ,json,random

CONFIG = {
          "host": "localhost",
          "user": "root",
          "password": "root",
          "database": "numerlical_db",
          "port": 3306
}
app =FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

def get_connection():
    return mysql.connector.conect(**CONFIG)

@app.get("/equation/random/{method_name}")
def random_equation(method_name:str):
    conn = get_connection()
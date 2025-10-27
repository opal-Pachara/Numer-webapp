# Numerical Methods Web Application

เว็บแอปพลิเคชันสำหรับคำนวณวิธีการเชิงตัวเลข (Numerical Methods) พัฒนาด้วย React และ FastAPI

## 📋 สารบัญ

- [ภาพรวมโปรเจค](#ภาพรวมโปรเจค)
- [โครงสร้างโปรเจค](#โครงสร้างโปรเจค)
- [เทคโนโลยีที่ใช้](#เทคโนโลยีที่ใช้)
- [วิธีติดตั้งและรันโปรเจค](#วิธีติดตั้งและรันโปรเจค)
- [องค์ประกอบของโปรเจค](#องค์ประกอบของโปรเจค)
- [API Endpoints](#api-endpoints)

---

## ภาพรวมโปรเจค

โปรเจคนี้เป็นแพลตฟอร์มสำหรับคำนวณปัญหาทางคณิตศาสตร์ด้วยวิธีการเชิงตัวเลข โดยแบ่งออกเป็น 4 หมวดหมู่หลัก:

1. **Root of Equation** - การหารากของสมการ
2. **Interpolation** - การประมาณค่า
3. **Linear Algebra** - พีชคณิตเชิงเส้น
4. **Numerical Integration** - การอินทิเกรตเชิงตัวเลข

---

## โครงสร้างโปรเจค

```
web-app/
├── src/
│   ├── components/          # React Components
│   │   ├── Home.jsx         # หน้าหลัก
│   │   ├── Root Of Equetion/     # วิธีการหารากสมการ
│   │   │   ├── Bisection.jsx          # วิธีการแบ่งครึ่ง
│   │   │   ├── Falseposition.jsx      # วิธีการตำแหน่งเท็จ
│   │   │   ├── Newtonraphson.jsx      # วิธีนิวตัน-ราฟสัน
│   │   │   ├── Onepoint.jsx           # วิธีจุดเดียว
│   │   │   └── secant.jsx             # วิธีเซแคนต์
│   │   ├── Interpolation/         # วิธีการประมาณค่า
│   │   │   ├── largrang.jsx        # วิธีลากรองจ์
│   │   │   └── regreesion.jsx      # การถดถอย
│   │   ├── LinearAlgebra/          # พีชคณิตเชิงเส้น
│   │   │   ├── Carmerrule.jsx      # กฎของแครมเมอร์
│   │   │   ├── Choleskey.jsx       # การแยกตัวประกอบโชเลสกี
│   │   │   ├── Gausselimination.jsx    # การกำจัดเกาส์
│   │   │   ├── Gaussjordan.jsx     # การกำจัดเกาส์-จอร์แดน
│   │   │   ├── LUDecomposition.jsx     # การแยกตัวประกอบ LU
│   │   │   └── Matrixinversion.jsx     # การหาเมทริกซ์ผกผัน
│   │   └── NumerIntegration/       # การอินทิเกรตเชิงตัวเลข
│   │       └── SimpsonRule.jsx     # กฎของซิมป์สัน
│   ├── App.jsx              # ไฟล์หลักของแอป (Routes)
│   ├── main.jsx             # Entry point ของแอป
│   ├── App.css              # สไตล์ของ App
│   └── global.css           # สไตล์ทั่วทั้งแอป
├── numer_db/
│   └── API/                 # Backend API
│       ├── API.py           # FastAPI application
│       ├── requirements.txt # Python dependencies
│       └── dockerfile       # Docker config สำหรับ API
├── public/                  # Static files
├── package.json             # Dependencies และ scripts
├── Dockerfile               # Docker config สำหรับ frontend
└── docker-compose.yaml      # Docker Compose configuration

```

---

## เทคโนโลยีที่ใช้

### Frontend
- **React 19.1.1** - UI Framework
- **Vite** - Build tool และ development server
- **React Router** - สำหรับจัดการ routing
- **Axios** - HTTP client สำหรับเรียก API
- **Plotly.js** - สร้างกราฟแบบ interactive

### Backend
- **FastAPI** - Python web framework
- **Uvicorn** - ASGI server สำหรับรัน FastAPI
- **MySQL Connector** - เชื่อมต่อกับ MySQL database

### Database
- **MySQL** - Database สำหรับเก็บข้อมูลสมการ

### Containerization
- **Docker** - สำหรับ containerize application
- **Docker Compose** - จัดการ multi-container application

---

## วิธีติดตั้งและรันโปรเจค

### วิธีที่ 1: รันด้วย Docker (แนะนำ)

1. เปิด Terminal/Command Prompt ในโฟลเดอร์ `web-app`

2. รันคำสั่ง:
```bash
docker-compose up --build
```

3. เปิดเบราว์เซอร์และเข้าไปที่:
   - Frontend: `http://localhost:5174`
   - API: `http://localhost:8000`
   - MySQL: `localhost:3307`

### วิธีที่ 2: รันแบบแยก Frontend และ Backend

#### Frontend (React)

1. เปิด Terminal ในโฟลเดอร์ `web-app`

2. ติดตั้ง dependencies:
```bash
npm install
```

3. รัน development server:
```bash
npm run dev
```

4. Frontend จะรันที่ `http://localhost:5174`

#### Backend (FastAPI)

1. เปิด Terminal ใหม่ในโฟลเดอร์ `web-app/numer_db/API`

2. สร้าง virtual environment (แนะนำ):
```bash
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate
```

3. ติดตั้ง dependencies:
```bash
pip install -r requirements.txt
```

4. รัน API server:
```bash
uvicorn API:app --host 0.0.0.0 --port 8000
```

5. API จะรันที่ `http://localhost:8000`

#### Database (MySQL)

1. ติดตั้ง MySQL บนเครื่องของคุณ

2. สร้าง database ชื่อ `numerlical_db`

3. Import schema และข้อมูลเริ่มต้น (ถ้ามี)

---

## องค์ประกอบของโปรเจค

### 1. Frontend (React + Vite)

#### App.jsx
เป็นไฟล์หลักที่จัดการ routing ภายในแอปพลิเคชัน ใช้ React Router สำหรับ navigate ไปยังหน้าต่างๆ โดยมี routes ครอบคลุม:
- Root of Equation: 5 วิธี (Newton-Raphson, Bisection, False Position, One Point, Secant)
- Interpolation: 2 วิธี (Lagrange, Regression)
- Linear Algebra: 4 วิธี (Gauss Elimination, Gauss Jordan, Cramer Rule)
- Numerical Integration: 1 วิธี (Simpson Rule)

#### Home.jsx
หน้าหลักของแอปพลิเคชัน แสดงเมนูเพื่อเลือกวิธีการคำนวณต่างๆ โดยมี interface แบบ card layout ที่ให้ผู้ใช้เลือกหมวดหมู่และวิธีการคำนวณที่ต้องการ

#### Components
แต่ละ component รับผิดชอบแสดง UI และคำนวณผลลัพธ์ตามวิธีการที่เลือก:
- **Input fields** - รับข้อมูลจากผู้ใช้
- **Calculation logic** - คำนวณผลลัพธ์ตามอัลกอริทึมที่กำหนด
- **Visualization** - แสดงผลลัพธ์ในรูปแบบกราฟหรือตาราง
- **API Integration** - ดึงข้อมูลตัวอย่างจาก backend

### 2. Backend (FastAPI)

#### API.py
FastAPI application ที่ทำหน้าที่:
- **Database Connection** - เชื่อมต่อกับ MySQL database พร้อม retry mechanism
- **CORS Configuration** - เปิดให้ frontend เรียก API ได้จากทุก origin
- **Random Equation Endpoint** - สุ่มดึงสมการตัวอย่างจาก database ตาม method name ที่ระบุ

**ฟังก์ชันหลัก:**
- `get_connection_with_retry()` - เชื่อมต่อ database พร้อม retry mechanism (10 ครั้ง หน่วงเวลา 3 วินาที)
- `random_equation()` - GET endpoint สำหรับดึงสมการสุ่มจาก database

#### Database Configuration
ใช้ environment variables สำหรับการตั้งค่า:
- `DATABASE_HOST` - ที่อยู่ของ database (default: host.docker.internal)
- `DATABASE_PORT` - พอร์ตของ database (default: 3306)
- `DATABASE_USER` - username (default: root)
- `DATABASE_PASSWORD` - password (default: root)
- `DATABASE_NAME` - ชื่อ database (default: numerlical_db)

### 3. Docker Configuration

#### docker-compose.yaml
จัดการ 3 services:
1. **mysql** - MySQL database container (port 3307)
2. **fast-api** - FastAPI backend container (port 8000)
3. **frontend** - React frontend container (port 5174)

มี network configuration และ dependencies ระหว่าง services

#### Dockerfile (Frontend)
- ใช้ Node.js 22.14.0
- ติดตั้ง dependencies ด้วย `npm install`
- Expose port 5174
- รันด้วย `npm run dev`

#### dockerfile (API)
- ใช้ Python base image
- ติดตั้ง dependencies จาก requirements.txt
- Expose port 8000
- รันด้วย uvicorn

---

## API Endpoints

### `GET /equation/random/{method_name}`

ดึงสมการสุ่มจาก database ตาม method ที่ระบุ

**Parameters:**
- `method_name` (string) - ชื่อวิธีการ เช่น "newton", "bisection", "lagrange"

**Response:**
```json
{
  "id": 1,
  "method_name": "newton",
  "equation_text": "x^3 - x - 2",
  "inputs": {
    "x0": 2,
    "tolerance": 0.001
  }
}
```

**Error Response:**
```json
{
  "error": "No equations found for method 'newton'"
}
```

---

## วิธีการใช้งาน

1. เปิดเว็บแอปที่ `http://localhost:5174`
2. เลือกหมวดหมู่ที่ต้องการ (Root of Equation, Interpolation, Linear Algebra, หรือ Numerical Integration)
3. เลือกวิธีการคำนวณ
4. กรอกข้อมูลที่ต้องการ (หรือกดปุ่มสุ่มเพื่อดึงตัวอย่างจาก database)
5. ระบบจะคำนวณและแสดงผลลัพธ์ พร้อมกราฟ (ถ้ามี)

---

## Development Commands

### Frontend
```bash
npm run dev      # รัน development server
npm run build    # build สำหรับ production
npm run lint     # ตรวจสอบ code style
npm run preview  # preview production build
```

### Backend
```bash
uvicorn API:app --reload --host 0.0.0.0 --port 8000  # รัน development server พร้อม auto-reload
```

---

## Environment Variables

### API
```bash
DATABASE_HOST=host.docker.internal
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=root
DATABASE_NAME=numerlical_db
```

---

## License

MIT License

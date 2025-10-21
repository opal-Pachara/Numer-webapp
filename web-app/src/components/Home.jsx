import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Numerical Methods Web Application</h1>
        <p>เครื่องมือคำนวณวิธีการเชิงตัวเลขสำหรับการแก้สมการและปัญหาทางคณิตศาสตร์</p>
      </header>

      <main className="home-main">
        <section className="category-section">
          <h2>Root of Equation</h2>
          <div className="method-grid">
            <Link to="/root-of-equation/newton" className="method-card">
              <h3>Newton-Raphson</h3>
              <p>วิธีการนิวตัน-ราฟสัน</p>
            </Link>
            <Link to="/root-of-equation/bisection" className="method-card">
              <h3>Bisection</h3>
              <p>วิธีการแบ่งครึ่ง</p>
            </Link>
            <Link to="/root-of-equation/false-position" className="method-card">
              <h3>False Position</h3>
              <p>วิธีการตำแหน่งเท็จ</p>
            </Link>
            <Link to="/root-of-equation/one-point" className="method-card">
              <h3>One Point</h3>
              <p>วิธีการจุดเดียว</p>
            </Link>
            <Link to="/root-of-equation/secant" className="method-card">
              <h3>Secant</h3>
              <p>วิธีการเซแคนต์</p>
            </Link>
          </div>
        </section>

        <section className="category-section">
          <h2>Interpolation</h2>
          <div className="method-grid">
            <Link to="/interpolation/lagrange" className="method-card">
              <h3>Lagrange</h3>
              <p>การประมาณค่าด้วยลากรองจ์</p>
            </Link>
            <Link to="/interpolation/regression" className="method-card">
              <h3>Regression</h3>
              <p>การถดถอย</p>
            </Link>
          </div>
        </section>

        <section className="category-section">
          <h2>Linear Algebra</h2>
          <div className="method-grid">
            <Link to="/linear-algebra/gauss-elimination" className="method-card">
              <h3>Gauss Elimination</h3>
              <p>การกำจัดเกาส์</p>
            </Link>
            <Link to="/linear-algebra/gauss-jordan" className="method-card">
              <h3>Gauss Jordan</h3>
              <p>การกำจัดเกาส์-จอร์แดน</p>
            </Link>
            <Link to="/linear-algebra/lu-decomposition" className="method-card">
              <h3>LU Decomposition</h3>
              <p>การแยกตัวประกอบ LU</p>
            </Link>
            <Link to="/linear-algebra/matrix-inversion" className="method-card">
              <h3>Matrix Inversion</h3>
              <p>การหาเมทริกซ์ผกผัน</p>
            </Link>
            <Link to="/linear-algebra/cramer-rule" className="method-card">
              <h3>Cramer's Rule</h3>
              <p>กฎของแครมเมอร์</p>
            </Link>
            <Link to="/linear-algebra/cholesky" className="method-card">
              <h3>Cholesky</h3>
              <p>การแยกตัวประกอบโชเลสกี</p>
            </Link>
          </div>
        </section>

        <section className="category-section">
          <h2>Numerical Integration</h2>
          <div className="method-grid">
            <Link to="/numerical-integration/simpson" className="method-card">
              <h3>Simpson's Rule</h3>
              <p>กฎของซิมป์สัน</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

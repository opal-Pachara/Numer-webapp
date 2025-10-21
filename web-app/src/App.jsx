import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Newton from "./components/Root Of Equetion/Newtonraphson";
import Bisection from "./components/Root Of Equetion/Bisection";
import FalsePosition from "./components/Root Of Equetion/Falseposition";
import OnePoint from "./components/Root Of Equetion/Onepoint";
import Secant from "./components/Root Of Equetion/secant";
import Lagrange from "./components/Interpolation/largrang";
import Regression from "./components/Interpolation/regreesion";
import GaussElimination from "./components/LinearAlgebra/Gausselimination";
import GaussJordan from "./components/LinearAlgebra/Gaussjordan";
// import LUDecomposition from "./components/LinearAlgebra/LUDecomposition";
// import MatrixInversion from "./components/LinearAlgebra/Matrixinversion";
import CramerRule from "./components/LinearAlgebra/Carmerrule";
// import Cholesky from "./components/LinearAlgebra/Choleskey";
import SimpsonRule from "./components/NumerIntegration/SimpsonRule";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Root Of Equation */}
        <Route path="/root-of-equation/newton" element={<Newton />} />
        <Route path="/root-of-equation/bisection" element={<Bisection />} />
        <Route path="/root-of-equation/false-position" element={<FalsePosition />} />
        <Route path="/root-of-equation/one-point" element={<OnePoint />} />
        <Route path="/root-of-equation/secant" element={<Secant />} />
        
        {/* Interpolation */}
        <Route path="/interpolation/lagrange" element={<Lagrange />} />
        <Route path="/interpolation/regression" element={<Regression />} />
        
        {/* Linear Algebra */}
        <Route path="/linear-algebra/gauss-elimination" element={<GaussElimination />} />
        <Route path="/linear-algebra/gauss-jordan" element={<GaussJordan />} />
        {/* <Route path="/linear-algebra/lu-decomposition" element={<LUDecomposition />} /> */}
        {/* <Route path="/linear-algebra/matrix-inversion" element={<MatrixInversion />} /> */}
        <Route path="/linear-algebra/cramer-rule" element={<CramerRule />} />
        {/* <Route path="/linear-algebra/cholesky" element={<Cholesky />} /> */}
        
        {/* Numerical Integration */}
        <Route path="/numerical-integration/simpson" element={<SimpsonRule />} />
      </Routes>
    </Router>
  );
}

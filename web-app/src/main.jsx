import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Largrange from "./components/Interpolation/largrang";
import "./components/Root Of Equetion/global.css";
import Gauus2 from "./components/LinearAlgebra/Gauss2";
// import App from "./App.jsx";
// import regrees2 from "./components/Root Of Equetion/regrees2.jsx";
// import Regrees from "./components/Root Of Equetion/regrees2.jsx";
// import Bisection from "./components/Root Of Equetion/Bisection.jsx";
// import Falseposition from "./components/Root Of Equetion/Falseposition.jsx";
// import Onepoint from "./components/Root Of Equetion/Onepoint.jsx";
// import Newtonraphson from "./components/Root Of Equetion/Newtonraphson.jsx";
// import Secant from "./components/Root Of Equetion/secant.jsx";
// import Newton2 from "./components/Root Of Equetion/newton2.jsx";
// import Regreesion from "./components/Root Of Equetion/regreesion.jsx";
// import SimpsonRule from "./components/NumerIntegration/SimpsonRule.jsx";
// import Carmerrule from "./components/LinearAlgebra/Carmerrule.jsx";
// import GaussEliminate from "./components/LinearAlgebra/Gausselimination.jsx";
// import GaussJordan from "./components/LinearAlgebra/Gaussjordan.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Gauus2 />
    {/* <Largrange /> */}
    {/* <GaussJordan /> */}
    {/* <GaussEliminate /> */}
    {/* <SimpsonRule /> */}
    {/* <Regreesion /> */}
    {/* <Carmerrule /> */}
    {/* <App /> */}
    {/* <Newton2 /> */}

    {/* <Newton2 /> */}
    {/* <Falseposition />
    <Onepoint />
    <Newtonraphson />
    <Secant /> */}
    {/* <Bisection /> */}
  </StrictMode>
);

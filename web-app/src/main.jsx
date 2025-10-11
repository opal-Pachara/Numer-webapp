import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Bisection from "./components/Root Of Equetion/Bisection.jsx";
import Falseposition from "./components/Root Of Equetion/Falseposition.jsx";
import Onepoint from "./components/Root Of Equetion/Onepoint.jsx";
import Newtonraphson from "./components/Root Of Equetion/Newtonraphson.jsx";
import Secant from "./components/Root Of Equetion/secant.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Falseposition />
    <Onepoint />
    <Newtonraphson />
    <Secant />
    {/* <Bisection /> */}
  </StrictMode>
);

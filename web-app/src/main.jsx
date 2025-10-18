import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Onepoint from "./components/Root Of Equetion/Onepoint";
// import Newton from "./components/Root Of Equetion/Newtonraphson";
import "./global.css";
// import Largrange from "./components/Interpolation/largrang";
import Newton from "./components/Root Of Equetion/Newtonraphson";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Newton />
    {/* <Onepoint /> */}
    {/* <Largrange /> */}
  </StrictMode>
);

import { useState } from "react";

function Newtonraphson() {
  const [xl, setXl] = useState("");
  const [xr, setXr] = useState("");
  const [fx, setFx] = useState("");
  const [result, SetResult] = useState([]);

  const cal = () => {
    let xlValue = parseFloat(xl);
    let xrValue = parseFloat(xr);
    
    if (isNaN(xlValue) || isNaN(xrValue)) {
      alert("pleae input number");
      return;
    }

    let expr;
    try {
      expr = parse(fx);
    } catch (err) {
      alert("wrong equetion");
      return;
    }

    const f = (x) => expr.evaluate({ x });
  };
  return (
    <div>
      <h1>Newton Raphson</h1>
    </div>
  );
}
export default Newtonraphson;

import { useState } from "react";
import { parse, evaluate, derivative } from "mathjs";
import Plotly from 'plotly.js-dist-min';

function Newton3() {
  const [fx, setFx] = useState("");
  const [x, setX] = useState("");

  const calNewton3 = () => {
    let xValue = parseFlaot(x);

    if (isNaN(xValue)) {
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
    const fPrime = (x) => derivative(expr, "x").evaluate({ x });
    
  };
  return (
    <div>
      <h1>newton3</h1>

      <input
        type="text"
        value={fx}
        onChange={(e) => setFx(e.target.value)}
        placeholder="F(x)"
      />

      <input
        type="text"
        value={x}
        onChange={(e) => setX(e.target.value)}
        placeholder="X"
      />

      {/* <button onClick={}>Caluculate</button> */}
    </div>
  );
}
export default Newton3;

import { useState } from "react";
import { evaluate, parse } from "mathjs";
import Plot from "react-plotly.js";

function SimpsonRule() {
  const [fx, setFx] = useState("");
  const [upper, setUpper] = useState("");
  const [lower, setLower] = useState("");
  const [integral, setIntegral] = useState(null);
  const [xValuestate, setXvaluestate] = useState([]);
  const [fxValuestate, setFxvaluestate] = useState([]);

  const calsimpson = () => {
    let upperValue = parseFloat(upper);
    let lowerValue = parseFloat(lower);

    if (isNaN(upperValue) || isNaN(lowerValue)) {
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

    let h = (upperValue - lowerValue) / 2;
    let xValue = [];
    let fxValue = [];

    for (let i = 0; i <= 2; i++) {
      let xi = lowerValue + i * h;
      xValue.push(xi);
      fxValue.push(f(xi));
    }

    let I = (h / 3) * (fxValue[0] + 4 * fxValue[1] + fxValue[2]);
    let fxtrue = fxValue[2] - fxValue[0];
    console.log(fxtrue);
    console.log(I);
    setIntegral(I);
    setXvaluestate(xValue);
    setFxvaluestate(fxValue);
  };

  return (
    <div>
      <h1>Simpson's Rule</h1>
      <input
        type="text"
        value={fx}
        onChange={(e) => setFx(e.target.value)}
        placeholder="F(x)"
      />

      <input
        type="text"
        value={upper}
        onChange={(e) => setUpper(e.target.value)}
        placeholder="Upper"
      />

      <input
        type="text"
        value={lower}
        onChange={(e) => setLower(e.target.value)}
        placeholder="Lower"
      />

      <button onClick={calsimpson}>Calculate</button>
      <h1>{integral}</h1>

      <Plot
        data={[
          {
            x: xValuestate,
            y: fxValuestate,
            type: "scatter",
            mode: "markers",
            name: "f(x) at sample points",
          },
          {
            x: [Math.min(...xValuestate), Math.max(...xValuestate)],
            y: [fxValuestate[0], fxValuestate[fxValuestate.length - 1]],
            type: "scatter",
            mode: "lines",
            name: "approx line",
          },
        ]}
      />
    </div>
  );
}
export default SimpsonRule;

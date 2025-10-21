import { useState, useEffect } from "react";
import { evaluate, parse, derivative } from "mathjs";
import Plot from "react-plotly.js";

function Newton() {
  const [fx, setFx] = useState("");
  const [x, setX] = useState("");
  const [steps, setSteps] = useState([]);

  const fetchEquation = async () => {
    try {
      const res = await fetch(
        "http://127.0.0.1:8000/equation/random/Newton-Raphson"
      );
      const data = await res.json();
      setFx(data.inputs.FX);
      setX(data.inputs.X);
    } catch (err) {
      console.log(err);
    }
  };

  const Calnewton = () => {
    let xValue = parseFloat(x);

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

    let x0 = xValue;
    let fx0 = f(x0);
    let x1;
    let epsilon;

    let result = [];
    let iter = 1;

    do {
      const fxdri = fPrime(x0);
      x1 = x0 - fx0 / fxdri;
      epsilon = Math.abs((x1 - x0) / x1) * 100;

      result.push({
        iteration: iter,
        x: x0,
        epsilon,
      });

      x0 = x1;
      fx0 = f(x0);
      iter++;
      if (iter > 50) break;
    } while (epsilon >= 0.000001 && Math.abs(fx0) >= 0.000001);
    setSteps(result);
  };
  {
  }

  return (
    <div>
      <h1>Newton Raphson</h1>

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

      <button onClick={Calnewton}>Calculate</button>
      <button onClick={fetchEquation}>Fetch</button>

      {steps.length > 0 && (
        <div>
          <table border="1px">
            <thead>
              <tr>
                <th>Iteration</th>
                <th>X</th>
                <th>Eror (%)</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((s, index) => (
                <tr key={index}>
                  <td>{s.iteration}</td>
                  <td>{s.x.toPrecision(7)}</td>
                  <td>{s.epsilon.toPrecision(7)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Plot
            data={[
              {
                x: steps.map((s) => s.iteration),
                y: steps.map((s) => s.epsilon),
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" },
                name: "Eror(%)",
                customdata: steps.map((s) => s.x.toPrecision(7)),
                hovertemplate:
                  "Error: %{y}<br>X: %{customdata}<br>Iteration: %{x}<extra></extra>",
              },
            ]}
            layout={{
              title: "Error per Iteration",
              xaxis: {
                title: "Iteration",
                dtick: 1,
              },
              yaxis: {
                title: "Error (%)",
              },
            }}
          />
        </div>
      )}
    </div>
  );
}
export default Newton;

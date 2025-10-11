import { useState } from "react";
import { parse, evaluate, derivative } from "mathjs";

function Newtonraphson() {
  const [x, setX] = useState("");
  const [fx, setFx] = useState("");
  const [steps, setSteps] = useState([]);

  const Calnewton = () => {
    let xValue = parseFloat(x);

    if (isNaN(xValue)) {
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
    const fPrime = (x) => derivative(expr, "x").evaluate({ x });

    let x0 = xValue;
    let fx0 = f(x0);
    let x1;
    let epsilon;

    let result = [];
    let iter = 1;

    do {
      const fxdri = fPrime(x0);

      if (Math.abs(fxdri) < 1e-10) {
        alert("derivative too close to zero");
        return;
      }

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
    {
    }
  };

  return (
    <div>
      <h1>Newton Raphson</h1>
      <input
        type="text"
        value={fx}
        onChange={(e) => setFx(e.target.value)}
        placeholder="Equetion F(x)"
      />

      <input
        type="text"
        value={x}
        onChange={(e) => setX(e.target.value)}
        placeholder="x"
      />

      <button onClick={Calnewton}>Calculate</button>
      {steps.length > 0 && (
        <table
          display="Block"
          overflow-x="auto"
          white-space="nowrap"
          border="1"
        >
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
      )}
    </div>
  );
}
export default Newtonraphson;

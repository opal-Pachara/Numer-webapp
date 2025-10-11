import { useState } from "react";
import { parse, evaluate } from "mathjs";

function Secant() {
  const [x0, setX0] = useState("");
  const [x1, setX1] = useState("");
  const [fx, setFx] = useState("");
  const [steps, setSteps] = useState([]);

  const Calsecant = () => {
    let x0Value = parseFloat(x0);
    let x1Value = parseFloat(x1);

    if (isNaN(x0Value) || isNaN(x1Value)) {
      alert("Please input numbers");
      return;
    }

    let expr;
    try {
      expr = parse(fx);
    } catch (err) {
      alert("Wrong equation");
      return;
    }

    const f = (x) => expr.evaluate({ x });

    let epsilon = 0.0001;
    let maxiter = 50;
    let iter = 0;
    let x2;
    let history = [];

    do {
      let fx0 = f(x0Value);
      let fx1 = f(x1Value);

      x2 = x1Value - (fx1 * (x1Value - x0Value)) / (fx1 - fx0);

      let err = Math.abs((x2 - x1Value) / x2) * 100;

      history.push({
        iteration: iter + 1,
        x0: x0Value,
        x1: x1Value,
        x2: x2,
        error: err,
      });

      x0Value = x1Value;
      x1Value = x2;
      iter++;
    } while (Math.abs(f(x2)) > epsilon && iter < maxiter);

    setSteps(history);
  };

  return (
    <div>
      <h1>Secant Method</h1>
      <input
        type="text"
        value={fx}
        onChange={(e) => setFx(e.target.value)}
        placeholder="F(x)"
      />

      <input
        type="text"
        value={x0}
        onChange={(e) => setX0(e.target.value)}
        placeholder="X0"
      />

      <input
        type="text"
        value={x1}
        onChange={(e) => setX1(e.target.value)}
        placeholder="X1"
      />

      <button onClick={Calsecant}>Calculate</button>

      {steps.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Iteration</th>
              <th>X0</th>
              <th>X1</th>
              <th>X2</th>
              <th>Error (%)</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((s, index) => (
              <tr key={index}>
                <td>{s.iteration}</td>
                <td>{s.x0.toPrecision(7)}</td>
                <td>{s.x1.toPrecision(7)}</td>
                <td>{s.x2.toPrecision(7)}</td>
                <td>{s.error.toFixed(6)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Secant;

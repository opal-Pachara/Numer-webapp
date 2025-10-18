import { useState } from "react";
import { parse, evaluate } from "mathjs";
import Plot from "react-plotly.js";

function Onepoint() {
  const [x, setX] = useState("");
  const [fx, setFx] = useState("");
  const [result, setResult] = useState(null);

  function calOnepoint() {
    let xold = parseFloat(x);
    let iter = 1;
    let xnew, err;

    let data = [];

    let expr = parse(fx);
    const f = (x) => expr.evaluate({ x });

    do {
      xnew = f(xold);
      err = Math.abs((xnew - xold) / xnew);

      data.push({
        iteration: iter,
        xold: xold,
        xnew: xnew,
        error: err,
      });

      xold = xnew;
      iter++;
    } while (err > 0.0001 && iter < 50);

    setResult(data);
  }
  return (
    <div>
      <h1>Onepoint</h1>

      <input
        type="text"
        value={fx}
        onChange={(e) => setFx(e.target.value)}
        placeholder="fx"
      />

      <input
        type="text"
        value={x}
        onChange={(e) => setX(e.target.value)}
        placeholder="x"
      />
      <button onClick={calOnepoint}>Calculate</button>

      <table border="1">
        <thead>
          <tr>
            <th>iteration</th>
            <th>X_old</th>
            <th>x_new</th>
            <th>Error</th>
          </tr>
        </thead>
        <tbody>
          {result &&
            result.map((row, i) => (
              <tr key={i}>
                <td>{row.iteration}</td>
                <td>{row.xold}</td>
                <td>{row.xnew}</td>
                <td>{row.error.toPrecision(4)}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {result && (
        <Plot
          data={[
            {
              x: result.map((r) => r.iteration),
              y: result.map((r) => r.xnew),
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
              line: { shape: "spline" },
              name: "x_new per iteration",
            },
          ]}
          layout={{
            title: "One-Point Iteration Convergence",
            xaxis: { title: "Iteration" },
            yaxis: { title: "x_new" },
            autosize: true,
          }}
        />
      )}
    </div>
  );
}
export default Onepoint;

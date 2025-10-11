import { useState } from "react";
import { parse, evaluate } from "mathjs";

function Falseposition() {
  const [xr, setXr] = useState("");
  const [xl, setXl] = useState("");
  const [fx, setFx] = useState("");
  const [steps, setSteps] = useState([]);

  const Falsepositon = () => {
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

    let fxl = f(xlValue);
    let fxr = f(xrValue);
    let xm = (xlValue * fxr - xrValue * fxl) / (fxr - fxl);

    let fxm = f(xm);
    let xmold;
    let epsilon;

    let result = [];
    let iter = 1;

    do {
      if (fxm * fxr >= 0) {
        xrValue = xm;
        fxr = fxm;
      } else {
        xlValue = xm;
        fxl = fxm;
      }

      xmold = xm;
      xm = (xlValue * fxr - xrValue * fxl) / (fxr - fxl);
      fxm = f(xm);
      epsilon = Math.abs((xm - xmold) / xm) * 100;

      result.push({
        iteration: iter,
        xl: xlValue,
        xr: xrValue,
        xm: xm,
        epsilon,
      });

      iter++;
      if (iter > 50) break;
    } while (epsilon >= 0.000001);
    setSteps(result);
    {
    }
  };

  return (
    <div>
      <h1>Falseposition</h1>

      <input
        type="text"
        value={fx}
        onChange={(e) => setFx(e.target.value)}
        placeholder="Enter Equetion"
      />

      <input
        type="text"
        value={xl}
        onChange={(e) => setXl(e.target.value)}
        placeholder="Enter XL"
      />

      <input
        type="text"
        value={xr}
        onChange={(e) => setXr(e.target.value)}
        placeholder="Enter XR"
      />

      <button onClick={Falsepositon}></button>
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
              <th>XL</th>
              <th>XR</th>
              <th>XM</th>
              <th>Eror (%)</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((s, index) => (
              <tr key={index}>
                <td>{s.iteration}</td>
                <td>{s.xl.toPrecision(7)}</td>
                <td>{s.xr.toPrecision(7)}</td>
                <td>{s.xm.toPrecision(7)}</td>
                <td>{s.epsilon.toPrecision(7)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Falseposition;

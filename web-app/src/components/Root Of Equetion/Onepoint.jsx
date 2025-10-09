import { useState } from "react";
import { parse, evaluate } from "mathjs";

function Onepoint() {
  const [xl, setXl] = useState("");
  const [xr, setXr] = useState("");
  const [fx, setFx] = useState("");
  const [steps, setSteps] = useState([]);

  const Onepointcalculation = () => {
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

    let xm = (xlValue + xrValue) / 2;
    let fxm = f(xm);
    let fxr = f(xrValue);
    let xmold;
    let epsilon;

    let result = [];
    let iter = 1;

    do {
      if (fxm * fxr >= 0) {
        xrValue = xm;
      } else {
        xlValue = xm;
      }

      xmold = xm;
      xm = (xlValue + xrValue) / 2;
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
    <>
      <h1>Onepoint</h1>
      <input
        type="text"
        value={fx}
        onChange={(e) => setFx(e.target.value)}
        placeholder="Enter Equeetion F(x)"
      />

      <input
        type="text"
        value={xl}
        onChange={(e) => setXl(e.target.value)}
        placeholder="Enter Xl"
      />

      <input
        type="text"
        value={xr}
        onChange={(e) => setXr(e.target.value)}
        placeholder="Enter XR"
      />

      <button onClick={Onepointcalculation}></button>
      {steps.length > 0 && (
        <table border="1">
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
                <td>{s.epsilon.toFixed(6)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
export default Onepoint;

import { useState } from "react";
import { parse, evaluate } from "mathjs";

function Bisection() {
  const [xr, setXr] = useState("");
  const [xl, setXl] = useState("");
  const [fx, setFx] = useState("");
  const [result, setResult] = useState(null);

  const Bisection = () => {
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
    } while (epsilon >= 0.000001);
    {
    }
    setResult(xm.toFixed(6));
  };

  return (
    <div>
      <h1>Bisection</h1>
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

      <button onClick={Bisection}></button>

      <h1>{result}</h1>
    </div>
  );
}
export default Bisection;

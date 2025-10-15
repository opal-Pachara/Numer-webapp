import { useState } from "react";
import Plot from "react-plotly.js";

function Regreesion() {
  const [n, setN] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [result, setResult] = useState(null);

  const calregrees = () => {
    let xArr = x.split(",").map((num) => parseFloat(num));
    let yArr = y.split(",").map((num) => parseFloat(num));
    let nValue = parseFloat(n);

    if (
      xArr.length !== nValue ||
      yArr.length !== nValue ||
      xArr.some(isNaN) ||
      yArr.some(isNaN)
    ) {
      return;
    }

    let sumX = 0,
      sumY = 0,
      sumXY = 0,
      sumX2 = 0;

    let st = 0,
      sr = 0;

    for (let i = 0; i < nValue; i++) {
      sumX += xArr[i];
      sumY += yArr[i];
      sumXY += xArr[i] * yArr[i];
      sumX2 += xArr[i] * xArr[i];
    }

    let xm = sumX / nValue;
    let ym = sumY / nValue;

    let a1 = (nValue * sumXY - sumX * sumY) / (nValue * sumX2 - sumX * sumX);
    let a0 = ym - a1 * xm;

    for (let i = 0; i < nValue; i++) {
      st += Math.pow(yArr[i] - ym, 2);
      sr += Math.pow(yArr[i] - (a1 * xArr[i] + a0), 2);
    }

    let r2 = (st - sr) / st;

    setResult({ a0, a1, r2, xArr, yArr });
  };

  return (
    <div>
      <h1>Regreesion</h1>
      <input
        type="text"
        value={n}
        onChange={(e) => setN(e.target.value)}
        placeholder="number of N"
      />

      <input
        type="text"
        value={x}
        onChange={(e) => setX(e.target.value)}
        placeholder="x"
      />

      <input
        type="text"
        value={y}
        onChange={(e) => setY(e.target.value)}
        placeholder="y"
      />

      <button onClick={calregrees}>Calculate</button>

      {result && (
        <div>
          <p>a0 = {result.a0.toPrecision(7)}</p>
          <p>a1= {result.a1.toPrecision(7)}</p>
          <p>R2 = {result.r2.toPrecision(7)}</p>

          <table border="1">
            <thead>
              <tr>
                <th>n</th>
                <th>x</th>
                <th>y</th>
              </tr>
            </thead>
            <tbody>
              {result.xArr.map((x, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{x}</td>
                  <td>{result.yArr[i]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Plot
            data={[
              {
                x: result.xArr,
                y: result.yArr,
                type: "scatter",
                mode: "markers",
                name: "Data Points",
                marker: { color: "Blue", size: 8 },
              },
              {
                x: [Math.min(...result.xArr), Math.max(...result.xArr)],
                y: [
                  result.a0 + result.a1 * Math.min(...result.xArr),
                  result.a0 + result.a1 * Math.max(...result.xArr),
                ],
                type: "scatter",
                mode: "lines",
                name: "Regression Line",
                line: { color: "red", width: 2 },
              },
            ]}
          />
        </div>
      )}
    </div>
  );
}
export default Regreesion;

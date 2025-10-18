import { useState } from "react";
import Plot from "react-plotly.js";

function Largrange() {
  const [n, setN] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [xi, setXi] = useState("");
  const [result, setResult] = useState(null);

  const fetchEquation = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/equation/random/Lagrange");
      const data = await res.json();
      setN(data.inputs.N);
      setX(data.inputs.X.join(","));
      setY(data.inputs.Y.join(","));
      setXi(data.inputs.xi);
      setResult(null);
    } catch (err) {
      console.log(err);
    }
  };

  const callargrange = () => {
    const nValue = parseInt(n, 10);
    const xArr = x.split(",").map((num) => parseFloat(num));
    const yArr = y.split(",").map((num) => parseFloat(num));
    const xiValue = parseFloat(xi);

    let value = 0;
    for (let i = 0; i < nValue; i++) {
      let term = yArr[i];
      for (let j = 0; j < nValue; j++) {
        if (j !== i) {
          term *= (xiValue - xArr[j]) / (xArr[i] - xArr[j]);
        }
      }
      value += term;
    }

    const minX = Math.min(...xArr);
    const maxX = Math.max(...xArr);
    const sampleX = [];
    const lValues = Array.from({ length: nValue }, () => []);
    for (let xx = minX; xx <= maxX; xx += 1) {
      sampleX.push(xx);
      for (let i = 0; i < nValue; i++) {
        let Li = 1;
        for (let j = 0; j < nValue; j++) {
          if (i !== j) {
            Li *= (xx - xArr[j]) / (xArr[i] - xArr[j]);
          }
        }
        lValues[i].push(Li);
      }
    }

    setResult({ value, xArr, yArr, xiValue, sampleX, lValues });
  };

  return (
    <div>
      <h1>Largrange</h1>

      <button onClick={fetchEquation}>สุ่มสมการจาก Backend</button>

      <div>
        <input
          type="text"
          value={n}
          onChange={(e) => setN(e.target.value)}
          placeholder="N"
        />
        <input
          type="text"
          value={xi}
          onChange={(e) => setXi(e.target.value)}
          placeholder="xi"
        />
        <input
          type="text"
          value={x}
          onChange={(e) => setX(e.target.value)}
          placeholder="X เช่น 0,1,2,5"
        />
        <input
          type="text"
          value={y}
          onChange={(e) => setY(e.target.value)}
          placeholder="Y เช่น 2,3,12,147"
        />
        <button onClick={callargrange}>Calculate</button>
      </div>

      {result && (
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>N</th>
                <th>X</th>
                <th>Y</th>
                <th>XI</th>
              </tr>
            </thead>
            <tbody>
              {result.xArr.map((xVal, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{xVal}</td>
                  <td>{result.yArr[i]}</td>
                  <td>{result.value.toFixed(6)}</td>
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
                mode: "lines+markers",
                name: "Points",
                marker: { color: "black", size: 8 },
              },
              {
                x: [result.xiValue],
                y: [result.value],
                type: "scatter",
                mode: "lines+markers+text",
                name: `f(${result.xiValue})`,
                marker: { color: "red", size: 10 },
              },
              ...result.lValues.map((L, i) => ({
                x: result.sampleX,
                y: L.map((val) => val * result.yArr[i]),
                type: "scatter",
                mode: "lines+marker",
                name: `L${i}`,
                line: { width: 2 },
              })),
            ]}
            layout={{
              shapes: [
                {
                  type: "line",
                  x0: result.xiValue,
                  x1: result.xiValue,
                  y0: 0,
                  y1: result.value,
                  line: {
                    color: "Blue",
                    width: 2,
                    dash: "lines",
                  },
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Largrange;

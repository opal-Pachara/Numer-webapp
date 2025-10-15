import { useState } from "react";
import Plot from "react-plotly.js";

function GaussEliminate() {
  const [a11, setA11] = useState("");
  const [a12, setA12] = useState("");
  const [a13, setA13] = useState("");
  const [a21, setA21] = useState("");
  const [a22, setA22] = useState("");
  const [a23, setA23] = useState("");
  const [a31, setA31] = useState("");
  const [a32, setA32] = useState("");
  const [a33, setA33] = useState("");

  const [b1, setB1] = useState("");
  const [b2, setB2] = useState("");
  const [b3, setB3] = useState("");

  const [result, setResult] = useState(null);

  const calGauss = () => {
    const A = [
      // 0   1   2
      [a11, a12, a13], //0
      [a21, a22, a23], //1
      [a31, a32, a33], //2
    ];

    const B = [b1, b2, b3];

    let eli21 = A[1][0] / A[0][0];
    A[1][0] = 0;
    A[1][1] -= eli21 * A[0][1];
    A[1][2] -= eli21 * A[0][2];
    B[1] -= eli21 * B[0];

    let eli31 = A[2][0] / A[0][0];
    A[2][0] = 0;
    A[2][1] -= eli31 * A[0][1];
    A[2][2] -= eli31 * A[0][2];
    B[2] -= eli31 * B[0];

    let eli32 = A[2][1] / A[1][1];
    A[2][1] = 0;
    A[2][2] -= eli32 * A[1][2];
    B[2] -= eli32 * B[1];

    let z = B[2] / A[2][2];
    let y = (B[1] - A[1][2] * z) / A[1][1];
    let x = (B[0] - A[0][1] * y - A[0][2] * z) / A[0][0];

    setResult([x, y, z]);
  };

  return (
    <div>
      <h1>Gauss Elimination</h1>
      <input
        type="number"
        value={a11}
        onChange={(e) => setA11(e.target.value)}
        placeholder="a11"
      />
      <input
        type="number"
        value={a12}
        onChange={(e) => setA12(e.target.value)}
        placeholder="a12"
      />
      <input
        type="number"
        value={a13}
        onChange={(e) => setA13(e.target.value)}
        placeholder="a13"
      />
      <input
        type="number"
        value={a21}
        onChange={(e) => setA21(e.target.value)}
        placeholder="a21"
      />
      <input
        type="number"
        value={a22}
        onChange={(e) => setA22(e.target.value)}
        placeholder="a22"
      />
      <input
        type="number"
        value={a23}
        onChange={(e) => setA23(e.target.value)}
        placeholder="a23"
      />

      <input
        type="number"
        value={a31}
        onChange={(e) => setA31(e.target.value)}
        placeholder="a31"
      />
      <input
        type="number"
        value={a32}
        onChange={(e) => setA32(e.target.value)}
        placeholder="a32"
      />
      <input
        type="number"
        value={a33}
        onChange={(e) => setA33(e.target.value)}
        placeholder="a33"
      />

      <input
        type="number"
        value={b1}
        onChange={(e) => setB1(e.target.value)}
        placeholder="b1"
      />
      <input
        type="number"
        value={b2}
        onChange={(e) => setB2(e.target.value)}
        placeholder="b2"
      />
      <input
        type="number"
        value={b3}
        onChange={(e) => setB3(e.target.value)}
        placeholder="b3"
      />

      <button onClick={calGauss}>Calculate</button>

      {result && (
        <div>
          <p>x1 = {result[0]}</p>
          <p>x2 = {result[1]}</p>
          <p>x3 = {result[2]}</p>
        </div>
      )}
      <Plot
        data={[
          {
            x: result,
            type: "scatter",
            mode: "markers",
          },
        ]}
      />
    </div>
  );
}
export default GaussEliminate;

import { use, useState } from "react";
import { det, number } from "mathjs";
import Plot from "react-plotly.js";

function Carmerrule() {
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
  const [resultx, setResultx] = useState(null);

  const calcarmer = () => {
    let A = [
      [a11, a12, a13],
      [a21, a22, a23],
      [a31, a32, a33],
    ];

    let B1 = [
      [b1, a12, a13],
      [b2, a22, a23],
      [b3, a32, a33],
    ];

    let B2 = [
      [a11, b1, a13],
      [a21, b2, a23],
      [a31, b3, a33],
    ];

    let B3 = [
      [a11, a12, b1],
      [a21, a22, b2],
      [a31, a32, b3],
    ];

    let x1 = det(B1) / det(A);
    let x2 = det(B2) / det(A);
    let x3 = det(B3) / det(A);

    setResultx([x1, x2, x3]);
  };

  return (
    <div>
      <h1>Carmer rule</h1>

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
      <button onClick={calcarmer}>Calculate</button>
      {resultx && (
        <div>
          <p>x1 = {resultx[0]}</p>
          <p>x2 = {resultx[1]}</p>
          <p>x3 = {resultx[2]}</p>
        </div>
      )}
      <Plot
        data={[
          {
            x: resultx,
            type: "scatter",
            mode: "markers",
          },
        ]}
      />
    </div>
  );
}

export default Carmerrule;

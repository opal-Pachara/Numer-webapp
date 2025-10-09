// ข้อมูล 5 จุด
const points = [
  { x: 2, y: 9.5 },
  { x: 4, y: 8.0 },
  { x: 6, y: 10.5 },
  { x: 8, y: 39.5 },
  { x: 10, y: 72.5 },
];

function linearSpline(x) {
  for (let i = 0; i < points.length - 1; i++) {
    const x0 = points[i].x;
    const y0 = points[i].y;
    const x1 = points[i + 1].x;
    const y1 = points[i + 1].y;

    if (x >= x0 && x <= x1) {
      const m = (y1 - y0) / (x1 - x0); 
      return y0 + m * (x - x0); 
    }
  }
  return null;
}

const xValues = [4.5];
xValues.forEach((x) => {
  console.log(`f(${x}) = ${linearSpline(x)}`);
});

export default linearSpline;

// ฟังก์ชัน g(x) สำหรับตัวอย่าง: sqrt(2) root ของ x^2 - 2 = 0
function g(x) {
  return 0.5 * (x + 2 / x);  // ตัวอย่างสูตร Fixed-point
}

let x_old = 1;
let tol = 0.0001;
let maxIter = 100;

for (let i = 0; i < maxIter; i++) {
  let x_new = g(x_old);
  if (Math.abs(x_new - x_old) < tol) break;
  x_old = x_new;
}

console.log("Root ≈", x_old);

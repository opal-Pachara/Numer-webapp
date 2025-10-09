const LinearRegression = (target) => {
  let x = [10, 15, 20, 30, 40, 50, 60, 70, 80];
  let y = [5, 9, 15, 18, 22, 30, 35, 38, 43];

  let n = x.length;
  let sumX = 0,
    sumY = 0,
    sumXY = 0,
    sumX2 = 0;
  let st = 0,
    sr = 0;

  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXY += x[i] * y[i];
    sumX2 += x[i] * x[i];
  }

  let xm = sumX / n;
  let ym = sumY / n;

  let a1 = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  let a0 = ym - a1 * xm;

  for (let i = 0; i < n; i++) {
    st += Math.pow(y[i] - ym, 2);
    sr += Math.pow(y[i] - (a1 * x[i] + a0), 2);
  }

  let syx = Math.sqrt(sr / (n - 2));
  let r2 = (st - sr) / st;

  let ans = a0 + a1 * target;

  console.log("f(x) = " + a0.toFixed(4) + " + " + a1.toFixed(4) + "x");
  console.log("Prediction at x=" + target + " : " + ans.toFixed(4));
  console.log("Standard error = " + syx.toFixed(4));
  console.log("R² = " + r2.toFixed(4));
};

LinearRegression(100, 2);

export default LinearRegression;

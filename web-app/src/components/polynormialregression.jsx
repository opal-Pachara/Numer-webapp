const PolynomialRegression = (target, order) => {
  let x = [10, 15, 20, 30, 40, 50, 60, 70, 80];
  let y = [5, 9, 15, 18, 22, 30, 35, 38, 43];

  let n = x.length;
  let a = [];
  fill2DimensionsArray(a, order + 1, order + 1);
  let b = new Array(order + 1).fill(0);

  for (let i = 0; i < order + 1; i++) {
    for (let k = 0; k <= i; k++) {
      let sum = 0;
      let t = i + k;
      for (let j = 0; j < n; j++) {
        sum += Math.pow(x[j], t);
      }
      a[i][k] = sum;
      a[k][i] = sum;
    }
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += y[j] * Math.pow(x[j], i);
    }
    b[i] = sum;
  }

  let sumY = 0;
  let st = 0;
  let sr = 0;
  let ans = 0;
  let s = "";

  let f = solve(a, b);

  for (let i = 0; i < order + 1; i++) {
    ans += f[i] * Math.pow(target, i);
    if (i == 0) {
      s += f[i] + " + ";
    } else if (i < order) {
      s += f[i] + " (x^" + i + ") + ";
    } else {
      s += f[i] + " (x^" + i + ")";
    }
  }

  for (let i = 0; i < n; i++) {
    sumY += y[i];
  }

  let ym = sumY / n;

  for (let i = 0; i < n; i++) {
    let ax = 0;
    for (let j = 0; j < order + 1; j++) {
      if (j == 0) {
        ax -= f[j];
      } else {
        ax -= f[j] * Math.pow(x[i], j);
      }
    }
    st += Math.pow(y[i] - ym, 2);
    sr += Math.pow(y[i] + ax, 2);
  }

  let syx = Math.pow(sr / (n - (order + 1)), 0.5);
  let r2 = (st - sr) / st;

  console.log("f(x) = " + s);
  console.log("ans = " + ans);
  console.log("standard error = " + syx);
  console.log("R-Squared = " + r2);
};

export default PolynomialRegression;

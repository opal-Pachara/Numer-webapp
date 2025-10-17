//1+2+3+4+5+....n
let sum = 0;
for (let i; i < 10; i++) {
  sum += sum + i;
}
console.log(sum);

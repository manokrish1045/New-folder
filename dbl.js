// console.log(process.agrv, process.agrv[2]);


const double = (n) => n * 2;
// console.log(double(process.agrv[2]));
const [, , num] = process.argv;
console.log(double(num))

// const double = (n) => n * 2;
// console.log(double(10));
// console.log(global);


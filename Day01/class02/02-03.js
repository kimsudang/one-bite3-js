// Infinity
let num = Infinity;
console.log(typeof num); // number 타입

let num1 = 100 / 0;
console.log(num1); // Infinity

// NaN
let number = NaN;
console.log(typeof number); // number 타입

let number1 = "javascript" / 10;
console.log(number1); // NaN

// BigInt
let bigNum1 = 99999999999999999999n;
let bigInt2 = BigInt("99999999999999999999");

console.log(bigNum1); // bigint
console.log(bigNum2); // bigint

// Null : 존재하지 않거나 알 수 없는 값
let numm = null;
console.log(typeof numm); // object => js의 오래된 오류.
console.log(numm === null); // true

// Undefined => 값이 할당되지 않은 상태
let nnum;
console.log(typeof nnum); // undefined

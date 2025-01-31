// multi dimention array;

const arrre = [
  ["talha", "faridpur", 18],
  ["sajib", "comilla", 19],
  ["rezaul", "narsingi", 28, ["read", "sleep"]],
];

console.log(arrre);
console.log(arrre.length);
console.log(arrre[2][3][1]);


// Arithmetic oparetors;

let jj = 102;
let kk = 5;
console.log(jj + kk);
console.log(jj - kk);
console.log(jj / kk);
console.log(jj ** kk);
console.log(jj % kk);
console.log(jj++);
console.log(++jj);
console.log(jj--);



// Assignment Operators;
let one = 30;
let two = 20;

// one = one + two;
// console.log(one);
one += two;
console.log(one);

// one = one - two;
// console.log(one);
one -= two;
console.log(one);

one *= two;
console.log(one);

one /= two;
console.log(one);


// Comparison Operators;
var com = 30;
var comp = '20';


console.log(com === comp);
console.log(com !== comp);
console.log(com > comp);
console.log(com < comp);
console.log(com <= comp);
console.log(com >= comp);

let str = com < comp ? 'talha' : 'sajib'
console.log(str);

console.log('scond assignment');


// If Statements;

let numm1 = 20;
let numm2 = 15;

if (numm1 > numm2 || false) {
  console.log('talha');
}

// else If;
let person = 10;
person = 'sajib';

if (person = 'talha') {
  console.log('talha okk');
}else if (person = 'tamim') {
  console.log('tamim okkk');
  
} else if (person = 'sajib') {
  console.log(person = 'sajib okkk');
  
}else {
  console.log('oll akk');
  
}

let pra = 200;

if (pra > 25 ) {
  console.log('no alow');
} else if (pra = 2) {
  console.log('okk');
}else {
  console.log('final');
  
}
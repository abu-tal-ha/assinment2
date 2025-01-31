// assingment 01;

// standar way
var firstName = "Abu";
var age = 20;
let lastName = "talha";

console.log(firstName);
console.log(age);
console.log(lastName);

// new practis way, first way use ;
firstName = "Abu";
console.log(firstName);

//
const Pi = 3.456; // allow
// Pi = 4.456; *** not allow
console.log(Pi);

// number use
var myName1 = "talha";
// 1myName **** not allow
console.log(myName1);

// not standar way;
var na$me = "abu talha";
// -name  **** not allow
console.log(na$me);

// operetor use
let $project = "portfolio";
console.log($project);

// Camel Case;
const myFristName = "AbuTalha";
console.log(myFristName);

//  comments kora dekhbo;

// Single Line Comment;
// Another single line commnent;

/*
This is a Multi Line Comment Example;
*/

/*
//1. Primitive values;
// String
Boolean
Number
null
undefined
BigInt
Symbol

2.Object;
*/

// undefined;
let un = undefined;
console.log(typeof un);

// null;
const nl = null;
console.log(typeof nl);

// number;
var number = 2983.3;
console.log(typeof number);

// string;
let myName = "Abu Talha";
console.log(typeof myName);

// bigint;
let bigint = BigInt;
console.log(typeof bigint);

// Symbol
const symboll = Symbol;
console.log(symboll);

const myFullName = "AbuTalha";
console.log(myFristName);

// assingment02;

// data convert 3 way te;
// string;
// Number;
// Boolean;

// number to string;
let a = 1;
let b = "33";
console.log(a + b);

// string to number;
let x = 1;
let p = "33";
console.log(x - p);

// string to number;
let m = 10;
let n = "55ab";

console.log(parseInt(n));

// Boolean;
let bl = 10;
var boole = "20";
console.log(bl > boole);

// Boolean;
let boolen = 100;
var bool = "20";
console.log(boolen > bool);

// true && true;
let tr = "hellw" && 333;
console.log(tr);

// true || true;
let tru = "hellw" || 333;
console.log(tru);

// true valuse and false value;
// false value;
/*
null,
undefind,
0,
-0,
0n,
NaN,

*/

console.log(Boolean(0n));

// if else;
if (-0) {
  console.log("hellw world ");
}

// number to methods;
let num = 29440;
let num2 = 49;
console.log(num.toString());
console.log(num.toExponential());

// toFixed;
let fx = 43.54848487;
let fxed = 4;

console.log(fx.toFixed(2));
console.log(Math.round(fx));
console.log(Math.ceil(fx));
console.log(Math.floor(fx));
console.log(Math.pow(5, 3));
console.log(Math.round(Math.random() * 100));

// string methods;
let st = "abu, talha";
console.log(st.toUpperCase());
console.log(st.length);
console.log(st.toLowerCase());
console.log(st.slice(0, 3));
console.log(st.slice(-5));
console.log(st.substring(0, 3));
console.log(st.replace("talha", "Tal Ha"));
console.log(st + "?");
console.log(st.trim());
console.log(st.charAt());
console.log(st.at(2));
console.log(st.split(","));

// array understanding ;
const arr = ["talha", "sajib", "rakib", "tamim"];
console.log(arr);
console.log(arr[(0, 1, 2)]);

// loop;
// for loop;
const nmbr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < nmbr.length; i++) {
  console.log(nmbr[i]);
}

// forEach;
nmbr.forEach(function (item, index, arr) {
    console.log(arr);
});


// 

// arry methods;
 let persn = ['talha', 'rakib', 'naim']
let ingr = persn.pop()
// persn[3] = 'jane'
persn.push('jane')
persn.shift()
persn.unshift('aaa')
 console.log(persn);

 console.log("Talha");
 

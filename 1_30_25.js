// // swich statements;
// let person;
// person = 'talha'
// switch (person) {
//     case 'tamim':
//         console.log('all thr best tamim');
//         break;
//     case 'sakib':
//         console.log('all rounder');
//         break;
//     case 'talha':
//         console.log('all the best talha cuple');
//         break;

//     default:
//         console.log('no acces');
// }

// date swich use;

switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");

    break;
  case 1:
    console.log("Monday");

    break;
  case 2:
    console.log("Tuesday");

    break;
  case 3:
    console.log("Wednesday");

    break;
  case 4:
    console.log("Thursday");

    break;
  case 5:
    console.log("Friday");

    break;
  case 6:
    console.log("Saturday");

    break;

  default:
    console.log("Invalid day");

    break;
}
console.log("swich case");

// ********** //
// Intro_Loops;

for (let i = 5; i <= 100; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}

for (let i = 10; i > 0; i -= 2) {
  console.log(i);
}

let i = 7;
for (;i <= 100; i++) {
  if (i % 7 == 0) {
    console.log(i);
  }
}
console.log('conditon:', i);

console.log();

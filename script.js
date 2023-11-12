// let a = 'Иван';
// let b = '37';
// let y7 = 'Овен';
// let c = ['Иван', 37, 'Овен'];
// console.log(c[0]);
// console.log(c);
// console.log(c.length);
// let d = [];

// let zodiak = ['Kozerog', 1, 1, 19];
// let man = ['ivan', 'male', 176, 93, 'Ivanov'];
// console.log(zodiak.length);
// console.log(man.length);
// console.log(man[4]);
// man[0] = 'sergay'
// console.log(man);
let a = [1, 2, 3, 4];
console.log(a);

let t = a[0];//1
a[0] = a[a.length - 1];
a[a.length - 1] = t;
console.log(a);
console.log(a[888]);
// for (let i = 0; i < a.length; i++) {
//     document.querySelector('.out1').innerHTML += a[i] + ' ';
// }

let out = '';
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        out += a[i] + '_';
    }
}
document.querySelector('.out1').innerHTML += out;

let b = [45, 2, 5, 23, 43, 1, 2, 6, 12];
let max = b[0];//4
for (let i = 0; i < b.length; i++) {
    if (b[i] > max) {
        max = b[i]
    }
}
console.log('max: ' + max);

let sum = 0;
for (let i = 0; i < b.length; i++) {

    sum = sum + b[i];
}
console.log('sum: ' + sum);


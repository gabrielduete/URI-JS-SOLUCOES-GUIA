let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let line1 = lines.shift().split(" ");
let line2 = lines.shift().split(" ");
let A = parseInt(line1.shift());
let B = parseInt(line1.shift());
let C = parseFloat(line1.shift());
let D = parseInt(line2.shift());
let E = parseInt(line2.shift());
let F = parseFloat(line2.shift());
console.log(`VALOR A PAGAR: R$ ${(B*C+E*F).toFixed(2)}`);
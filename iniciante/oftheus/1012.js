let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let line1 = lines.shift().split(" ");
let A = parseFloat(line1.shift());
let B = parseFloat(line1.shift());
let C = parseFloat(line1.shift());
let areaTriangulo = (A*C)/2;
let areaCirculo = 3.14159 * Math.pow(C,2);
let areaTrapezio = ((A+B)*C)/2;
let areaQuadrado = Math.pow(B,2);
let areaRetangulo = A * B;
console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);
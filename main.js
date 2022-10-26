// * wJsnack 1
let array1 = [];
let somma1 = 0;

while(somma1 < 50) {
  let numero = parseInt(prompt("Inserisci un numero < il 50"));
  somma1 += numero;
  array1.push(numero);
}

console.log(array1);
console.log(somma1);
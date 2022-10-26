// * wJsnack 1
// let array1 = [];
// let somma1 = 0;

// while(somma1 < 50) {
//   let numero = parseInt(prompt("Inserisci un numero < il 50"));
//   somma1 += numero;
//   array1.push(numero);
// }

// console.log(array1);
// console.log(somma1);



// * JSnack 2
// let somma2 = 0;
// let i = 0;

// while(i < 5){
//   let numero = parseInt(prompt("Inserisci un numero"));
//   somma2 += numero;
//   i++;
// }

// console.log(somma2);



// * JSnack 3
let N = parseInt(prompt("inserisci un numero per gli array"));
let i = 0;

while(i < N){
  let array3 = new Array();
  let x = 0;
  
  while(x<10){
    array3.push(Math.round(Math.random() * 100));
    x++;
  }
  console.log(array3);
  i++;
}
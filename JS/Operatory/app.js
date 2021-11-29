let number1 = parseInt(prompt("Podaj licze pierwsza"));
let number2 = parseInt(prompt("Podaj druga licze"));

let number3 = number1 + number2;
let number4 = number1 % number2;

document.write(number3);
document.write("<br>");
document.write(number4);

for (let i = 1; i <= 20; i++) {
  document.write("<br>");
  document.write("Licbza wynosi  " + i);
}

const PI = 3.1415;
const R = 5;


function kula() {
  var n2 = parseFloat(document.getElementById("n2").value);
  var n3 = (2 * PI * n2)
  document.getElementById("wynik").innerHTML = 'Obwod wynosi: ' + n3;
}


function szescian() {
  var n2 = parseFloat(document.getElementById("n2").value);
  var n3 = (12 * n2)
  document.getElementById("wynik").innerHTML = 'Obwod wynosi: ' + n3;
}

function stozek() {
  var n2 = parseFloat(document.getElementById("n2").value);
  var n3 = (PI * Math.pow(n2, 2))
  document.getElementById("wynik").innerHTML = 'Pole podstawy wynosi: ' + n3;

}



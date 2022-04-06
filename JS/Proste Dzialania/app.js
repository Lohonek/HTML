function dodawanie() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  document.getElementById("n3").value = n1 + n2;
}

function odejmowanie() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  document.getElementById("n3").value = n1 - n2;
}

function mnozenie() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  document.getElementById("n3").value = n1 * n2;
}

function dzielenie() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  document.getElementById("n3").value = n1 / n2;
}

function obwod() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);

  if (
    document.getElementById("n1").value.length == 0 ||
    document.getElementById("n2").value.length == 0
  ) {
    document.getElementById("wynik").innerHTML = 'Prosze uzupelnic dwie liczby'
  } else {
    var n3 = (n1 * n2)
    document.getElementById("wynik").innerHTML = 'Pole wynosi: ' + n3;
  }
}


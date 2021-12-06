var kolor = prompt("Podaj kolor: 1-zielony lub 2-czerwony");
if ((kolor == 1) | (kolor == "zielony")) {
  document.write("<font color=green>zielony</font>");
} else if ((kolor == 2) | (kolor == "czerwony")) {
  document.write("<font color=red>czerwony</font>");
} else {
  document.write("Podałeś nieprawidłową wartość !");
}

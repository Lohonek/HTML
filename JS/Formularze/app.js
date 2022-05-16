function logowanie() {
   var login = document.getElementById("login").value;
   var pass = document.getElementById("pass").value;

    if(login == "login" && pass == "pass"){
        window.location.replace("http://www.zs-strzyzow.itl.pl/")
    } else {
        document.write("zła wartosć")
    }

}
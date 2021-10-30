var pass1 = document.getElementById("a");
var eye1 = document.getElementById("b");
var pass2 = document.getElementById("c");
var eye2 = document.getElementById("d");


eye1.onclick = function () {

    if (this.getAttribute("class") == "far fa-eye-slash") {

        this.setAttribute("class", "far fa-eye");
        pass1.setAttribute("type", "text");
    } else {
        this.setAttribute("class", "far fa-eye-slash");
        pass1.setAttribute("type", "password");

    }
}


eye2.onclick = function () {

    if (this.getAttribute("class") == "far fa-eye-slash") {

        this.setAttribute("class", "far fa-eye");
        pass2.setAttribute("type", "text");
    } else {
        this.setAttribute("class", "far fa-eye-slash");
        pass2.setAttribute("type", "password");

    }
}
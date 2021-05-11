

function home(){
    document.getElementById("home-tabel").style= 'display: block';
    document.getElementById("about-tabel").style= 'display: none';
    document.getElementById("gallery-tabel").style= 'display: none';
    document.getElementById("contact-tabel").style= 'display: none';
}

function about(){
    document.getElementById("home-tabel").style= 'display: none';
    document.getElementById("about-tabel").style= 'display: block';
    document.getElementById("gallery-tabel").style= 'display: none';
    document.getElementById("contact-tabel").style= 'display: none';
}

function gallery(){
    document.getElementById("home-tabel").style= 'display: none';
    document.getElementById("about-tabel").style= 'display: none';
    document.getElementById("gallery-tabel").style= 'display: block';
    document.getElementById("contact-tabel").style= 'display: none';
}

function contact(){
    document.getElementById("home-tabel").style= 'display: none';
    document.getElementById("about-tabel").style= 'display: none';
    document.getElementById("gallery-tabel").style= 'display: none';
    document.getElementById("contact-tabel").style= 'display: block';
}

var header = document.getElementById("menus");
var btns = header.getElementsByClassName("menu-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
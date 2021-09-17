var acc = document.getElementsByClassName("q");
var i;
var span = document.getElementsByClassName("arrow")
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active") & this.classList.toggle("flip");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn1");
const span = document.getElementsByClassName("close2")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }}
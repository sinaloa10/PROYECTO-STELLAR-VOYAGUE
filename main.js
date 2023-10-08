import './style.css'

document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("title");
    title.style.color = "white";
    document.getElementById("body").addEventListener("click", function() {
      document.location.href = ("menu.html",true);
  });
});
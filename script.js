var expands = document.getElementsByClassName("expand");

for (i = 0; i < expands.length; i++) {
  var elet = expands[i]
  if (elet.classList.contains("oexpand")) {
    elet.classList.toggle("active");
    var content = elet.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 100 + "px";
    }
  }
  elet.addEventListener("click", toggle_expandcontent);
}

function toggle_expandcontent() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 100 + "px";
  }
}

function evans_hover(e) {
  e.setAttribute("src", "img/evans_clear")
}
function evans_nonhover(e) {
  e.setAttribute("src", "img/evans_fog")
}

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
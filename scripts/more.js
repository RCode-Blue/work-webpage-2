function toggleDocs(event) {
  if (event.target && event.target.className == "dots") {
    var prev = event.target.previousElementSibling;
    if (prev.style.display == "none") {
      prev.style.display = "inline";
      event.target.innerHTML = "less...";
    } else {
      prev.style.display = "none";
      event.target.innerHTML = "more...";
    }
  }
}

document.addEventListener("click", toggleDocs, true);

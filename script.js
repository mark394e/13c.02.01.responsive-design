"use strict";

window.addEventListener("load", init);

function init() {
  document.querySelector("#menubtn").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#menu").classList.toggle("hidden");

  let isHidden = document.querySelector("#menu").classList.contains("hidden");

  if (isHidden == true) {
    document.querySelector("#menubtn").textContent = "☰";
  } else {
    document.querySelector("#menubtn").textContent = "X";
  }
}

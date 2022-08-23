/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let simbolos = ["espadas", "trebol", "corazon", "diamante"];
  document.querySelector(".numero").innerHTML =
    cartas[Math.floor(Math.random() * cartas.length)];
  document
    .querySelector(".numero")
    .classList.add(simbolos[Math.floor(Math.random() * simbolos.length)]);
};

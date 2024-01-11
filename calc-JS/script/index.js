import calcular from "./module.js";
import copy from "./copytoClipboard.js";
import { clear, handleButtonPress, handleType } from "./key.js";
import themeSwitcher from "./theme.js";

const input = document.querySelector("#input");

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress);
});
document.querySelector("#clear").addEventListener("click", clear);
input.addEventListener("keydown", handleType);
document.querySelector("#equal").addEventListener("click", calcular);
document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);
document.querySelector("#copyToClipboard").addEventListener("click", copy);

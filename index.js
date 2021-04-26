import "./style.css";

const text = document.querySelector(".text-input");
const miror = document.querySelector(".mirror");

text.addEventListener("keyup", event => {
  let txt = event.target.value;
  txt = [...txt].reverse().join("");
  miror.innerText = txt;
});

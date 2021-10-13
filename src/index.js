import { executeCommands } from "./Autitos";

const commands = document.querySelector("#commands");
const gridSize = document.querySelector("#grid-size");
const initialPosition = document.querySelector("#initial-position");
const form = document.querySelector("#simular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  
  const sequence = commands.value+"/"+gridSize.value+"/"+initialPosition.value;
 
  div.innerHTML = "<p>" +" Final position "+ executeCommands(sequence) + "</p>";
});

const itemInput = document.getElementById("item-input");
const piorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");
function onInput(e) {
  heading.textContent = e.target.value; //this is dom
}
itemInput.addEventListener("input", onInput);
function onChecked(e) {
  const isCheck = e.target.onChecked;
  if (isCheck) {
    heading.textContent = "Recurring Item";
  } else {
    heading.textContent = itemInput.value;
  }
}
checkbox.addEventListener("change", onChecked);
function onFocue() {
  console.log("Input is focused");
  itemInput.style.backgroundColor = "lightyellow";
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineColor = "yellow";
  itemInput.style.outlineWidth = "5px";
}
function onBlur() {
  console.log("Input is blured");
  itemInput.style.backgroundColor = "white";
  itemInput.style.outlineStyle = "none";
}
itemInput.addEventListener("focue", onFocue);
itemInput.addEventListener("blur", onBlur);
piorityInput.addEventListener("change", onInput);

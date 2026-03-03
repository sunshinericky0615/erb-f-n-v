const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = document.querySelector("li");

function run() {
  console.log(itemList.className);
}
document.querySelector("button").onclick = run;

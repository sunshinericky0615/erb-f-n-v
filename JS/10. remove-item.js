function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}
removeClearButton();

function removeFirstButton() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");
  ul.removeChild(li);
}
removeFirstButton();

function removeItemGroup() {
  const li = document.querySelectorAll("li");
  li.forEach((item, index) => {
    if (index % 2 === 0) item.remove();
  });
}
removeItemGroup();

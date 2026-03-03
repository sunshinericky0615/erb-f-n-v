const logo = document.querySelector("header");
logo.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.currentTarget);
});
function onClick(e) {
  console.log(e.target);
  console.log(e.currentTarget);
  e.target.style.backgroudColor = "red";
  console.log(e.clientX);
  console.log(e.clientY);
  console.log(e.offsetX);
  console.log(e.offsetY);
}

logo.addEventListener("click", onClick);

document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("link is clicked");
});

const button = document.querySelector("form button");
const div = document.querySelector("dorm div:nth-child(2)");
const form = document.querySelector("form");

button.addEventListener("click", (e) => {
  alert("button was clicked");
});

div.addEventListener("click", (e) => {
  alert("div was click");
});

form.addEventListener("click", (e) => {
  alert("form was clicked");
});

// document.body.addEventListener("click", (e) => {
//   alert("body was clicked");
// });

const listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.remove();
  });
});

const list = document.querySelectorAll("li");
listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.remove();
    }
  });
});

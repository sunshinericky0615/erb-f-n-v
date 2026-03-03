function insertElement() {
  const filter = document.querySelector(".filter");
  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacementElement";
  //   filter.insertAdjacentElement("beforebegin", h1);
  filter.insertAdjacentElement("beforebegin", h1);
  const h1after = document.createElement("h1");
  //   h1after.textContent = "insertAdjacementElement";
  h1after.textContent = "insertAdjacementElement";
  const filter1 = document.querySelector(".filter");
  //   filter1.insertAdjacentElement("afterend", h1after);
  filter1.insertAdjacentElement("afterend", h1after);
}
insertElement();
function insertText() {
  const item = document.querySelector("li:first-child");
  // Use insertAdjacentText for plain strings
  item.insertAdjacentText("beforebegin", "before-begin");
  item.insertAdjacentText("afterbegin", "after-begin");
}
insertText();
function insertHTML() {
  // Fixed the typo from 'clrarBtn' to 'clearBtn'
  const clearBtn = document.querySelector("#clear");
  if (clearBtn) {
    clearBtn.insertAdjacentHTML("beforebegin", "<h2>before-begin</h2>");
    clearBtn.insertAdjacentHTML("afterend", "<h2>after-end</h2>");
  }
}
insertHTML();

function insertBeforeItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li"); // Selects the existing first li
  li.textContent = "insert-Before";
  const thirdItem = document.querySelector("li:nth-child(3)");

  // This MOVES the first li to the 3rd position
  ul.insertBefore(li, thirdItem);
}
insertBeforeItem();
function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

function insertAfterItem() {
  // 1. Create or select the element you want to move/insert
  const newItem = document.querySelector("li");
  newItem.textContent = "Moved to Position 2";

  // 2. Select the reference element
  const firstItem = document.querySelector("li:first-child");

  // 3. Use the modern .after() method (Standard since 2018)
  firstItem.after(newItem);

  /* 
     OR the classic way if you need to support very old browsers:
     firstItem.parentNode.insertBefore(newItem, firstItem.nextSibling);
  */
}

insertAfterItem();

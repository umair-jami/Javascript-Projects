const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";

  notes = document.querySelectorAll(".input-box");

  notes.forEach((nt) => {
    nt.onkeyup = function () {
      updateStorage();
    };
  });
}
showNotes();
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  img.src = "./images/delete.png";
  inputBox.setAttribute("contenteditable", "true");
  notesContainer.appendChild(inputBox).appendChild(img);

  notes = document.querySelectorAll(".input-box");
  inputBox.onkeyup = function () {
    updateStorage();
  };
  updateStorage();
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

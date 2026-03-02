// DOM Selection
const messageInput = document.getElementById("messageInput");
const messageCard = document.getElementById("messageCard");
const showMessageBtn = document.getElementById("showMessageBtn");
const changeColorBtn = document.getElementById("changeColorBtn");
const addNoteBtn = document.getElementById("addNoteBtn");
const removeNoteBtn = document.getElementById("removeNoteBtn");
const resetBtn = document.getElementById("resetBtn");

let note = null;

// Part 1: Show Message
showMessageBtn.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message) {
        messageCard.textContent = message;
        messageCard.classList.remove("hidden");
        messageCard.style.transform = "scale(1.05)";
        setTimeout(() => messageCard.style.transform = "scale(1)", 150);
    }
});

// Part 2: Change Card Color
changeColorBtn.addEventListener("click", () => {
    const bgColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
    const textColor = `hsl(${Math.random() * 360}, 30%, 30%)`;
    messageCard.style.backgroundColor = bgColor;
    messageCard.style.color = textColor;
});

// Part 3: Add Note
addNoteBtn.addEventListener("click", () => {
    if (!note) {
        note = document.createElement("p");
        note.textContent = "✨ Here's a magical note!";
        messageCard.appendChild(note);
    }
});

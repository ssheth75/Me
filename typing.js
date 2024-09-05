const textArray = ["Hi!", "I'm Shirvil", "And I'm a Software Engineer"];
const typingSpeed = 90; // typing speed in milliseconds
const pauseTime = 100; // pause time between messages
const cursorRemovalDelay = 400; // delay before removing the previous cursor (in milliseconds)

let textIndex = 0;
let charIndex = 0;
const typingTextElement = document.getElementById("typing-text");

function type() {
  const currentLine = typingTextElement.lastChild.querySelector(".line-text");

  if (charIndex < textArray[textIndex].length) {
    currentLine.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;

    setTimeout(type, typingSpeed);
  } else {
    if (textIndex < textArray.length - 1) {
      // Delay the removal of the previous cursor to create a smoother transition
      setTimeout(() => {
        removePreviousCursor();

        textIndex++;
        charIndex = 0;
        setTimeout(() => {
          // Create a new line of text and cursor for the next line
          const newLineDiv = document.createElement("div");
          newLineDiv.classList.add("line-container");

          const newLineText = document.createElement("span");
          newLineText.classList.add("line-text");
          newLineDiv.appendChild(newLineText);

          const newCursor = document.createElement("span");
          newCursor.classList.add("cursor");
          newCursor.textContent = "|";
          newLineDiv.appendChild(newCursor);

          typingTextElement.appendChild(newLineDiv);

          type();
        }, pauseTime);
      }, cursorRemovalDelay);
    } else {
      // Keep the final cursor visible on the last line
      const finalCursor = typingTextElement.querySelector(".cursor");
      finalCursor.style.display = "inline";
    }
  }
}

function removePreviousCursor() {
  const previousCursor = typingTextElement.querySelector(".cursor");
  if (previousCursor) {
    previousCursor.remove();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Create the first line of text and cursor
  const firstLineDiv = document.createElement("div");
  firstLineDiv.classList.add("line-container");

  const firstLineText = document.createElement("span");
  firstLineText.classList.add("line-text");
  firstLineDiv.appendChild(firstLineText);

  const firstCursor = document.createElement("span");
  firstCursor.classList.add("cursor");
  firstCursor.textContent = "|";
  firstLineDiv.appendChild(firstCursor);

  typingTextElement.appendChild(firstLineDiv);

  // Start typing
  setTimeout(type, typingSpeed);
});

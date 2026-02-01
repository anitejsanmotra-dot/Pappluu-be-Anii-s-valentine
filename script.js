const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const questionSection = document.getElementById("question-section");
const resultSection = document.getElementById("result-section");

// This function moves the "No" button to a random spot
noBtn.addEventListener("mouseover", () => {
    // 1. Calculate the available width and height of the screen
    // We subtract the button's size so it doesn't go off the edge
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // 2. Generate a random number between 0 and the max width/height
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // 3. Apply the new position to the button
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// This function shows your photo when "Yes" is clicked
function celebrate() {
    questionSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
}

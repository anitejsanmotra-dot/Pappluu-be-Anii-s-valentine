const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const questionSection = document.getElementById("question-section");
const resultSection = document.getElementById("result-section");

// Function to move the "No" button
noBtn.addEventListener("mouseover", () => {
    // Calculate random position within the screen boundaries
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Function to switch to the "YAY" screen
function celebrate() {
    questionSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
    
    // Optional: Add confetti or sound effects here!
}

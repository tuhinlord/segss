const spinButton = document.getElementById("spinButton");
const spinner = document.getElementById("spinner");
const message = document.getElementById("message");

// Function to handle the spin
spinButton.addEventListener("click", () => {
  // Disable the button during the spin
  spinButton.disabled = true;
  
  // Start spinning (rotate the spinner)
  const randomDeg = Math.floor(Math.random() * 360) + 1440; // To make sure it spins many times

  spinner.style.transition = "transform 4s ease-in-out";
  spinner.style.transform = `rotate(${randomDeg}deg)`;

  // After the spinning ends, show the message
  setTimeout(() => {
    // Show message after the spin stops
    message.style.display = "block";
    message.innerHTML = "Yes, I knew you wanted it too. So tonight?";

    // Re-enable the button after the spin
    spinButton.disabled = false;
  }, 4000); // 4 seconds for the spin to end
});

// Get the name from the URL
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

// Update the question with the user's name
const valentineQuestion = document.getElementById('valentineQuestion');
valentineQuestion.textContent = `${name}, will you be my Valentine?`;

// Handle the "No" button logic
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const messageElement = document.getElementById('message'); // Element to display messages
const giftElement = document.getElementById('gift'); // Element to display the GIF

let noClickCount = 0; // Track the number of times "No" is clicked
const messages = [
  "Are you sure? 🥺",
  "Come on, say yes! 😊",
  "Pretty please? 💖",
  "You're breaking my heart! 💔",
  "Just click yes already! 😭"
];

// List of local GIF files
const gifs = [
  "gifs/gif1.gif",
  "gifs/gif2.gif",
  "gifs/gif3.gif",
  "gifs/gif4.gif",
  "gifs/gif5.gif"
];

noButton.addEventListener('click', function () {
  if (noClickCount < messages.length) {
    // Show a message for the first few clicks
    messageElement.textContent = messages[noClickCount];
    // Change the GIF
    giftElement.src = gifs[noClickCount];
    noClickCount++;
  }

  // Move the "No" button to a random location within the screen bounds
  const buttonRect = noButton.getBoundingClientRect();
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Calculate maximum allowed positions to keep the button within the screen
  const maxX = screenWidth - buttonRect.width;
  const maxY = screenHeight - buttonRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = "fixed"; // Use fixed positioning to keep it within the screen
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;

  // Increase the size of the "Yes" button
  const currentYesSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentYesSize * 1.2}px`;
});

// Handle the "Yes" button
yesButton.addEventListener('click', function () {
  // Display a happy message
  messageElement.textContent = 'Yay! You made my day! 💖';

  // Hide the "Yes" and "No" buttons
  yesButton.style.display = 'none';
  noButton.style.display = 'none';

  // Optionally, change the GIF to a celebration GIF
  giftElement.src = "gifs/celebration.gif";
});
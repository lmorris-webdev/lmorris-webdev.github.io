
/* const messages = document.querySelectorAll('.container p');
let currentIndex = 0;

function showNextMessage() {
    // Hide the current message
    messages[currentIndex].classList.remove('active');

    // Set a timeout to create a gap before showing the next message
    setTimeout(() => {
        // Update the index to the next message
        currentIndex = (currentIndex + 1) % messages.length;

        // Show the next message
        messages[currentIndex].classList.add('active');
    }, 1000); // Adjust this value for the duration of the blank screen (in milliseconds)
}

// Start the cycle
setInterval(showNextMessage, 4000); // Total interval for each message cycle  */

/*
const messages = document.querySelectorAll('.container p');
const youtubeLink = document.getElementById('youtube-link');
let currentIndex = 0;

function showNextMessage() {
    // Hide the current message
    messages[currentIndex].classList.remove('active');

    // Check if the current message is the last one
    if (currentIndex === messages.length - 1) {
        // Show the YouTube link after the last message
        youtubeLink.style.display = 'block';

        // Set timeout for the next cycle to restart
        setTimeout(() => {
            youtubeLink.style.display = 'none'; // Hide the link
            currentIndex = 0; // Reset index to start from the first message
        }, 3000); // Duration to show the YouTube link (e.g., 3 seconds)
    } else {
        // Set a timeout to create a gap before showing the next message
        setTimeout(() => {
            // Update the index to the next message
            currentIndex = (currentIndex + 1) % messages.length;

            // Show the next message
            messages[currentIndex].classList.add('active');
        }, 1000); // Adjust this value for the duration of the blank screen (in milliseconds)
    }
}

// Start the cycle
setInterval(showNextMessage, 4000); // Total interval for each message cycle */

const messages = document.querySelectorAll('.container p');
const youtubeContainer = document.getElementById('youtube-container');
let currentIndex = 0;

function showNextMessage() {
    // Hide the current message
    messages[currentIndex].classList.remove('active');

    // Check if the current message is the last one
    if (currentIndex === messages.length - 1) {
        // Show the YouTube video container
        youtubeContainer.style.display = 'block';

        // You may want to set a timeout to hide the container after the video is done
        // Assuming your video is 2 minutes long (120 seconds)
        setTimeout(() => {
            youtubeContainer.style.display = 'none'; // Hide the video container
            currentIndex = 0; // Reset index to start from the first message
        }, 120000); // Duration in milliseconds (e.g., 120 seconds)
    } else {
        // Set a timeout to create a gap before showing the next message
        setTimeout(() => {
            // Update the index to the next message
            currentIndex = (currentIndex + 1) % messages.length;

            // Show the next message
            messages[currentIndex].classList.add('active');
        }, 1000); // Adjust this value for the duration of the blank screen (in milliseconds)
    }
}

// Start the cycle
setInterval(showNextMessage, 4000); // Total interval for each message cycle

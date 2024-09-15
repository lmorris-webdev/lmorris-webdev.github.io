const messages = document.querySelectorAll('.container p');
const videoContainer = document.getElementById('video-container');
const myVideo = document.getElementById('my-video');
const myAudio = document.getElementById('my-audio');
let currentIndex = 0;

// Function to show the next message
function showNextMessage() {
    // Hide all messages first
    messages.forEach(message => {
        message.classList.remove('active');
    });

    // If there are no more messages to show, start the video
    if (currentIndex >= messages.length) {
        videoContainer.style.display = 'block';
        myVideo.currentTime = 35; // Start video at 35 seconds
        myVideo.play();
        myAudio.pause();
        return; // Exit the function
    }

    // Show the current message
    messages[currentIndex].classList.add('active');
    
    // Move to the next message
    currentIndex++;
}

// Play the audio on page load
myAudio.play().catch(error => {
    console.error("Audio playback failed:", error);
});

// Show the first message and set a timer for the rest
showNextMessage(); // Show the first message immediately
const messageInterval = setInterval(() => {
    showNextMessage();
    // If all messages have been shown, clear the interval
    if (currentIndex >= messages.length) {
        clearInterval(messageInterval);
    }
}, 4000);

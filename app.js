const messages = document.querySelectorAll('.container p');
const videoContainer = document.getElementById('video-container');
const myVideo = document.getElementById('my-video');
const myAudio = document.getElementById('my-audio');
let currentIndex = 0;

// Function to show the next message
function showNextMessage() {
    // Hide the current message
    messages[currentIndex].classList.remove('active');

    // Check if the current message is the last one
    if (currentIndex === messages.length - 1) {
        // Show the video container
        videoContainer.style.display = 'block';

        // Start the video at 35 seconds
        myVideo.currentTime = 35;
        myVideo.play(); // Start playing the video

        // Stop the audio when the video starts
        myAudio.pause();
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

// Start playing the audio when the page loads
myAudio.play().catch(error => {
    console.error("Audio playback failed:", error);
});

// Start the cycle for messages
setInterval(showNextMessage, 4000); // Total interval for each message cycle

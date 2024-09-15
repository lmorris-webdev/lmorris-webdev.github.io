

// Select all <p> elements
const paragraphs = document.getElementsByTagName('.container p');

// Iterate through the <p> elements
for (let i = 0; i < paragraphs.length; i++) {
    console.log(`Paragraph ${i + 1}: ${paragraphs[i].innerText}`);
}

// Select the video element
const video = document.querySelector('video');

if (video) {
    console.log(`Video source: ${video.src}`);
} else {
    console.log('No video found.');
}


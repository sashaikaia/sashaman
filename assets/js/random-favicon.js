// random-favicon.js

const emojis = ['🎚️', '🎨', '🕹️', '⚗️', '👾', '🎵', '🎹', '🎧', '🎼', '🔊', '🎛️', '📻', '🎪', '✨', '🌈', '🔮'];

const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

// Create a canvas to draw the emoji
const canvas = document.createElement('canvas');
canvas.width = 64;
canvas.height = 64;
const ctx = canvas.getContext('2d');

// Draw emoji on canvas
ctx.font = '48px serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText(randomEmoji, 32, 32);

// Convert to favicon
const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/png';
link.rel = 'icon';
link.href = canvas.toDataURL();
document.head.appendChild(link);

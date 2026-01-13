// Base hues
const baseHues = [120, 146, 207, 270, 0, 43, 177, 25]; // forestgreen, seagreen, steelblue, etc.

const baseHue = baseHues[Math.floor(Math.random() * baseHues.length)];

const projectLinks = document.querySelectorAll('strong a');
const hueSpread = 40;

projectLinks.forEach((link, index) => {
  const hueOffset = (index / (projectLinks.length - 1)) * hueSpread - (hueSpread / 2);
  const hue = (baseHue + hueOffset + 360) % 360;
  link.style.color = `hsl(${hue}, 60%, 40%)`;
});

//your JS code here. If required.
// Mapping of keycodes to sounds
const soundMapping = {
  65: 'sounds/a.mp3',
  83: 'sounds/s.mp3',
  68: 'sounds/d.mp3',
  70: 'sounds/f.mp3',
  71: 'sounds/g.mp3',
  72: 'sounds/h.mp3',
  74: 'sounds/j.mp3',
  75: 'sounds/k.mp3',
  76: 'sounds/l.mp3',
};

// Function to play sound based on the key pressed
function playSound(keyCode) {
  const sound = new Audio(soundMapping[keyCode]);
  sound.play();
}

// Event listener for keydown events
window.addEventListener('keydown', (e) => {
  const keyCode = e.keyCode;
  if (soundMapping[keyCode]) {
    playSound(keyCode);
  }
});

// Event listener for button clicks
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('click', () => {
    const keyCode = key.getAttribute('data-key');
    playSound(keyCode);
  });
});

// Vars
const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const BLACK_KEYS = ['w', 'e', 'r', 't', 'y'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
// Select all keys
const keys = document.querySelectorAll('.key');

// Add an event listener to all keys
keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
});

// -- Handlers -- //
function playNote(key){
    // Get the note's letter value
    const noteAudio = document.getElementById(key.dataset.note);
    
    // Reset the note's current time to 0
    noteAudio.currentTime = 0;
    //Play the note
    noteAudio.play();

    // Add a class, active, for styling purposes
    key.classList.add('active');

    // Listen for when the sound has ended and remove 'active' class
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}

document.addEventListener('keydown', (e) => {
// Get the key that triggered the event
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

// If the key is being held down, don't play the note again
  if (e.repeat) {
    return;
  }
  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});

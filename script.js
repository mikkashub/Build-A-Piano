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

const autoPlayBtn = document.getElementById('playButton');

const happyBirthday = [
    { note: 'C', delay: 400 },
    { note: 'C', delay: 400 },
    { note: 'D', delay: 800 },
    { note: 'C', delay: 800 },
    { note: 'F', delay: 800 },
    { note: 'E', delay: 1000 }, // long pause

    { note: 'C', delay: 400 },
    { note: 'C', delay: 400 },
    { note: 'D', delay: 800 },
    { note: 'C', delay: 800 },
    { note: 'G', delay: 800 },
    { note: 'F', delay: 1000 },

    { note: 'C', delay: 400 },
    { note: 'C', delay: 400 },
    { note: 'Cb', delay: 800 },
    { note: 'A', delay: 800 },
    { note: 'G', delay: 800 },
    { note: 'E', delay: 800 },
    { note: 'D', delay: 1000 },

    { note: 'Ab', delay: 400 },
    { note: 'Ab', delay: 400 },
    { note: 'A', delay: 800 },
    { note: 'F', delay: 800 },
    { note: 'G', delay: 800 },
    { note: 'F', delay: 1000 },
];

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
async function playSong(){
    for (let i = 0; i < happyBirthday.length; i++){
        const item = happyBirthday[i];

        const keyElement = document.querySelector(`[data-note="${item.note}"]`);

        if(keyElement){
            keyElement.click();
            keyElement.classList.add('active');
            await sleep(item.delay);

            keyElement.classList.remove('active');

            await sleep(50);
        }
    }
}
autoPlayBtn.addEventListener('click', playSong);


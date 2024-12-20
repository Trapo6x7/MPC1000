document.addEventListener("keydown", handleKeyPress);
document.addEventListener("keyup", handleKeyPress);

let dateStartRecord;
let notesRecorded = [];
let recording = false;
let playing = false;
let simulateTouch = false;
// LA BOITE A RYTHME

function handleKeyPress(event) {
  if (event.repeat) {
    return;
  }

  const keyCode = event.keyCode;
  const key = document.querySelector(`.key[data-key = '${keyCode}']`);
  const audio = document.querySelector(`audio[data-key = '${keyCode}']`);

  if (!key) return;

  if (event.type === "keydown") {
    key.classList.toggle("playing");
  }

  if (event.type === "keyup") {
    if (keyCode !== 82 && keyCode !== 80) {
      key.classList.toggle("playing");
      return;
    }

    if (keyCode === 82) {
      triggerRecord();
    }

    if (keyCode === 80) {
      triggerPlay();
    }
  }

  if (!audio) return;

  playSound(audio);

  if (recording) {
    saveKey(event);
  }
}

function playSound(audio) {
  audio.currentTime = 0;
  audio.play();
}

function triggerRecord() {
  dateStartRecord = Date.now();
  recording = !recording;
  if (recording === true) {
    notesRecorded = [];
  }
}

function saveKey(event) {
  let playedTime = Date.now(event);
  let currentTime = playedTime - dateStartRecord;
  notesRecorded.push({ key: event.keyCode, time: currentTime });
  console.log(notesRecorded);
}

function triggerPlay() {
  playing = !playing;
  if (playing === false) return;
  notesRecorded.forEach((note) => {
    const audio = document.querySelector(`audio[data-key = '${note.key}']`);
    setTimeout(() => {
      audio.currentTime = 0;
      audio.play();
    }, note.time);
    key = note.key;
    time = note.time;
    simulateKey(note);
  });
}

function simulateKey(note) {
  const keyElement = document.querySelector(`div[data-key="${note.key}"]`);
  if ((simulateTouch = !simulateTouch)) {
    const eventKeyDown = new KeyboardEvent("keydown", { key: note.key });
    document.dispatchEvent(eventKeyDown);
    setTimeout(() => {
      keyElement.classList.toggle("playing");
    }, note.time);
    simulateTouch = simulateTouch;
  }
  if ((simulateTouch = simulateTouch)) {
    const eventKeyDown = new KeyboardEvent("keydown", { key: note.key });
    document.dispatchEvent(eventKeyDown);
    setTimeout(() => {
      keyElement.classList.toggle("playing");
    }, note.time * 1.1);
    simulateTouch = !simulateTouch;
  }
}

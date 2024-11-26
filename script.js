document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

// date.now chaque notes pour savoir le ryhtme
// mettre ces nombres dans un tableau
// lire le tableau

function handleKeyDown(event) {
  const keyCode = event.keyCode;
  const key = document.querySelector(`.key[data-key = '${keyCode}']`);
  const audio = document.querySelector(`audio[data-key = '${keyCode}']`);

  if (!key) return;
  key.classList.remove("playing");
  audio.currentTime = 0;
  audio.play();
  
  /* let playedTime = Date.now(event);
  console.log(playedTime);
  let objTimePlayed = {
    calulateValueNotes: function () {
      currentNote.key = event.key;
      currentNote.time = playedTime
      let currentYear = new Date().getUTCFullYear();
      let notes = currentYear - this.playedTime;
      console.log(notes);
    },
  };
  let currentNote = Object.create(objTimePlayed);

  console.log(objTimePlayed) */
}

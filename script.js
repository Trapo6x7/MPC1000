document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

function handleKeyDown(event) {
  const keyCode = event.keyCode;
  const key = document.querySelector(`.key[data-key = '${keyCode}']`);

  if (key.dataset.clicked === "true") return;
  key.dataset.clicked = "true";
  if (!key) return;
  key.classList.add("playing");
  const audio = document.querySelector(`audio[data-key = '${keyCode}']`);
  audio.play();
}

function handleKeyUp(event) {
  const keyCode = event.keyCode;
  const key = document.querySelector(`.key[data-key = '${keyCode}']`);
  if (!key) return;
  key.dataset.clicked = "false";
  key.classList.remove("playing");
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

function handleKeyDown(event) {
    const keyCode = event.keyCode;
    const key = document.querySelector(`.key[data-key = '${keyCode}']`);
    if (!key) return;
    key.classList.add("playing");
}

function handleKeyUp(event) {
    const keyCode = event.keyCode;
    const audio = document.querySelector(`audio[data-key = '${keyCode}']`);
    const key = document.querySelector(`.key[data-key = '${keyCode}']`);
    if (!key) return;
    key.classList.remove("playing");
    audio.play();
}
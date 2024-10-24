var clickCount = 0;
const button = document.getElementById("button");
const text = document.getElementById("text");

button.onmousedown = () => {
    clickCount += 1;

    text.innerHTML = `Button clicked ${clickCount} times!`;
}
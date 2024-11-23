//mouse events
const hoverButton = document.getElementById('hover-btn');
const hoverMessage = document.getElementById('change-msg');
//mouse hovering
hoverButton.addEventListener('mouseenter', () => {
    hoverMessage.textContent = "You are hovering on the button!";
});
//mouse not hovering
hoverButton.addEventListener('mouseleave', () => {
    hoverMessage.textContent = "You are NOT hovering on the button!";
});

//keyboard events
const keyboardInput = document.getElementById('keyboard-input');
const keyboardMsg = document.getElementById('keyboard-msg');
//display keys being pressed
keyboardInput.addEventListener('keydown', (event) => {
    keyboardMsg.textContent = `${event.key}`;
});

//form events
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const formMsg = document.getElementById('formMsg');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        formMsg.textContent = "Form successfully submitted!";

    });
});

//focus events
const focusInput = document.getElementById('focus-input');
const focusMsg = document.getElementById('focus-msg');
//focus
focusInput.addEventListener('focus', () => {
    focusMsg.textContent = "Input field is in focus.";
});
//blur
focusInput.addEventListener('blur', () => {
    focusMsg.textContent = "Input field is blurred!";
});

//event delegation

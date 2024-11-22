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


//form events


//focus events


//event delegation

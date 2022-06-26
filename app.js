
/* Creating divs with JS and not manually hard coding them. */

const container = document.querySelector(".calculator");
const screen = document.createElement('div');
const display = document.createElement('div');


/* Naming each div properly. */
screen.classList.add('screen');
display.classList.add('screen-text');

display.textContent = '';
display.style.overflow = 'hidden';

/* First we append screen to a bigger div(container), and then
we add display to smaller div(screen) */
container.appendChild(screen);
screen.appendChild(display);

const buttons = document.querySelectorAll(".grid-item");

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        if (button.innerHTML === "AC") {
            display.innerHTML = '';
        }

        else if (button.innerHTML === 'C') {
            display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
        }

        else if (display.innerHTML === '' && button.innerHTML === '=') {
            display.innerHTML = "No values selected";
        }

        else if (display.innerHTML != '' && button.innerHTML === '=') {
            display.innerHTML = eval(display.innerHTML);
        }

        else if (display.innerHTML != '' && button.innerHTML === '/') {
            display.innerHTML += button.innerHTML;
            display.innerHTML = eval(display.innerHTML);
        }

        else {
            display.innerHTML += button.innerHTML;
        }
    });
});
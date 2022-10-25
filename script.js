// Array of colors before generating random HEX value
const colors = ['white', 'black', 'purple', 'blue', 'grey', 'pink', 'red'];
// FLIP COLOR if BG color is WHITE then it should be BLACK (text content)
const headerName = document.getElementById("header-name");
// GET the ID of button
const btn = document.getElementById("btn");
// Use the QuerySelector to get the element class
const color = document.querySelector(".color");

// Event listener for "click", "mouse hover" etc.
btn.addEventListener("click", function () {
    // If the BG color is white then HEADER NAME will be BLACK
    const randomNumber = getRandomNumber();
    if (randomNumber === '#FFFFFF') {
        headerName.style.color = '#000000';
    }
    color.textContent = randomNumber;
    document.body.style.backgroundColor = randomNumber;
})

function getRandomNumber() {
    // The max color code of HEX is 0xFFFFFF
    const maxValue = 0xFFFFFF;
    // Generate the RANDOM HEX value
    const randomNumber = (Math.floor(Math.random() * maxValue)).toString(16);
    return `#${randomNumber.toUpperCase()}`;
}
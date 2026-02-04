const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");

function updateColor() {
    const r = parseInt(red.value);
    const g = parseInt(green.value);
    const b = parseInt(blue.value);

    // RGB
    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
    rgbValue.textContent = `RGB(${r}, ${g}, ${b})`;

    // HEX
    const hex = "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    hexValue.textContent = hex.toUpperCase();
}

// Eventos
red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);

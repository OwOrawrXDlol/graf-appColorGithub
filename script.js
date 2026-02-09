const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

const colorPicker = document.getElementById("colorPicker");

const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");

function clamp(value) {
    return Math.min(255, Math.max(0, value));
}

function updateColor(r, g, b) {
    r = clamp(r);
    g = clamp(g);
    b = clamp(b);

    // Sliders
    red.value = r;
    green.value = g;
    blue.value = b;

    // Inputs numéricos
    redNum.value = r;
    greenNum.value = g;
    blueNum.value = b;

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
    colorPicker.value = hex;
}

/* Sliders */
[red, green, blue].forEach(() => {
    red.addEventListener("input", () =>
        updateColor(+red.value, +green.value, +blue.value)
    );
    green.addEventListener("input", () =>
        updateColor(+red.value, +green.value, +blue.value)
    );
    blue.addEventListener("input", () =>
        updateColor(+red.value, +green.value, +blue.value)
    );
});

/* Inputs numéricos */
redNum.addEventListener("input", () =>
    updateColor(+redNum.value, +greenNum.value, +blueNum.value)
);
greenNum.addEventListener("input", () =>
    updateColor(+redNum.value, +greenNum.value, +blueNum.value)
);
blueNum.addEventListener("input", () =>
    updateColor(+redNum.value, +greenNum.value, +blueNum.value)
);

/* Color Picker */
colorPicker.addEventListener("input", () => {
    const hex = colorPicker.value;

    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    updateColor(r, g, b);
});

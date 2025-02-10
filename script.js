console.log('Welcome to 🌡️ Temperature Converter');

const tempLoad = () => {
    let fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#ffa41b";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
        fa.style.color = "#ffa41b";
    }, 1000);

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
    }, 2000);

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
    }, 3000);

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7;";
        fa.style.color = "#ff5151";
    }, 4000);
};

setInterval(() => {
    tempLoad();
}, 5000);

tempLoad();

const calculateTemp = () => {
    let numberTemp = document.getElementById('temp').value;
    
    // Convert input value to a number
    numberTemp = parseFloat(numberTemp);

    // Check if input is a valid number
    if (isNaN(numberTemp)) {
        document.getElementById('resultContainer').innerHTML = "Please enter a valid number!";
        return;
    }

    const tempSelected = document.querySelector('#temp_diff');
    const valeTemp = tempSelected.options[tempSelected.selectedIndex].value;

    // Convert temperature from Celsius to Fahrenheit
    const celTOfah = (cel) => (cel * 9/5) + 32;

    // Convert temperature from Fahrenheit to Celsius
    const fahTOcel = (fehr) => (fehr - 32) * 5/9;

    let result;
    if (valeTemp === "cel") {
        result = celTOfah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result.toFixed(2)}° Fahrenheit`;
    } else {
        result = fahTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result.toFixed(2)}° Celsius`;
    }
};

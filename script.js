console.log('Welcome to 🌡️ Temperature Converter');
console.log('%cDeveloped by Himanshu Jha 🚀', 'color: cyan; font-size: 14px; font-weight: bold;');


const calculateTemp = () => {
    let numberTemp = document.getElementById('temp').value;
    numberTemp = parseFloat(numberTemp);

    if (isNaN(numberTemp)) {
        document.getElementById('resultContainer').innerHTML = "❌ Enter a valid number!";
        return;
    }

    const tempSelected = document.querySelector('#temp_diff');
    const valeTemp = tempSelected.value;

    const celTOfah = (cel) => (cel * 9/5) + 32;
    const fahTOcel = (fehr) => (fehr - 32) * 5/9;

    let result;
    if (valeTemp === "cel") {
        result = celTOfah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `✅ ${result.toFixed(2)}° Fahrenheit`;
    } else {
        result = fahTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `✅ ${result.toFixed(2)}° Celsius`;
    }
};

/* 🔹 Dark Mode Toggle */
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');

    const elements = document.querySelectorAll('input, select, button');
    elements.forEach(el => el.classList.toggle('dark-mode'));

    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

// Preserve user preference
if (localStorage.getItem('darkMode') === 'enabled') {
    darkModeToggle.checked = true;
    darkModeToggle.dispatchEvent(new Event('change'));
}

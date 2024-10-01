import './style.css'


const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const colorStrip = document.getElementById('colorStrip');


function updateGradient() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    
    colorStrip.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}


color1Input.addEventListener('input', updateGradient);
color2Input.addEventListener('input', updateGradient);


updateGradient();






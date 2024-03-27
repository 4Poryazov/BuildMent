var button = document.getElementById("button");
button.addEventListener('mouseover', changeColor);
button.addEventListener('mouseout', returnColor);

function changeColor() {
    button.style.background = '#b0d7ff';
    button.style.boxShadow = 'none';
    button.style.border = '3px solid #eae8ff';
    button.style.color = '#eae8ff';
}
function returnColor() {
    button.style.background = '#d8d5db';
    button.style.boxShadow = '0px 4px 0px #b0d7ff';
    button.style.border = '2px solid #adacb5';
    button.style.color = '#2d3142';
}

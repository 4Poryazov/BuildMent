var loginButton = document.getElementById("loginBtn");
loginBtn.addEventListener('mouseover', changeColor);
loginBtn.addEventListener('mouseout', returnColor)

function changeColor() {
    loginButton.style.background = '#b0d7ff';
    loginButton.style.boxShadow = 'none';
    loginButton.style.border = '3px solid #eae8ff';
    loginButton.style.color = '#eae8ff';
}
function returnColor() {
    loginButton.style.background = '#d8d5db';
    loginButton.style.boxShadow = '0px 4px 0px #b0d7ff';
    loginButton.style.border = '2px solid #adacb5';
    loginButton.style.color = '#2d3142';
}

var registrationBTN = document.getElementById('registration-btn');
var loginBTN = document.getElementById('login-btn');

registrationBTN.addEventListener('mouseover', changeColor);
loginBTN.addEventListener('mouseover', changeColor);

registrationBTN.addEventListener('mouseout', returnColor);
loginBTN.addEventListener('mouseout', returnColor);

function changeColor() {
    this.style.background = '#b0d7ff';
    this.style.boxShadow = 'none';
    this.style.border = '2px solid #eae8ff';
    this.style.color = '#eae8ff';
}
function returnColor() {
    this.style.background = 'rgb(45, 49, 66)';
    this.style.boxShadow = '0px 4px 0px #b0d7ff';
    this.style.border = '2px solid #adacb5';
    this.style.color = 'rgb(216, 213, 219)';
}
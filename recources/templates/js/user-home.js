var buttonStart = document.getElementById('start');
var buttonInfoTable = document.getElementById('information-table');
var buttonMyInfo = document.getElementById('my-information');
var buttonMyDuty = document.getElementById('my-duty');
var buttonMyOffers = document.getElementById('my-offers');

var startInfo = document.getElementById('start-info');
var infoTable = document.getElementById('info-table');
var myInfo = document.getElementById('my-info');
var myDuty = document.getElementById('my-duty-info');
var myOffers = document.getElementById('my-offers-info');

buttonStart.addEventListener('click', showStartTable);
buttonInfoTable.addEventListener('click', showInfoTable);
buttonMyInfo.addEventListener('click', showMyInfo);
buttonMyDuty.addEventListener('click', showMyDuty);
buttonMyOffers.addEventListener('click', showMyOffers);

buttonStart.addEventListener('mouseover', hoverButton);
buttonInfoTable.addEventListener('mouseover', hoverButton);
buttonMyInfo.addEventListener('mouseover', hoverButton);
buttonMyDuty.addEventListener('mouseover', hoverButton);
buttonMyOffers.addEventListener('mouseover', hoverButton);

buttonStart.addEventListener('mouseout', unhoverButton);
buttonInfoTable.addEventListener('mouseout', unhoverButton);
buttonMyInfo.addEventListener('mouseout', unhoverButton);
buttonMyDuty.addEventListener('mouseout', unhoverButton);
buttonMyOffers.addEventListener('mouseout', unhoverButton);

function showStartTable(){
    changeButton(buttonStart);
    restoreButton(buttonInfoTable)
    restoreButton(buttonMyInfo);
    restoreButton(buttonMyDuty);
    restoreButton(buttonMyOffers);

    startInfo.style.display = "block";
    infoTable.style.display = "none";
    myInfo.style.display = "none";
    myDuty.style.display = "none";
    myOffers.style.display = "none";
}

function showInfoTable(){
    changeButton(buttonInfoTable);
    restoreButton(buttonStart);
    restoreButton(buttonMyInfo);
    restoreButton(buttonMyDuty);
    restoreButton(buttonMyOffers);
    
    infoTable.style.display = "block";
    startInfo.style.display = "none";
    myInfo.style.display = "none";
    myDuty.style.display = "none";
    myOffers.style.display = "none";
}

function showMyInfo(){
    changeButton(buttonMyInfo);
    restoreButton(buttonStart);
    restoreButton(buttonInfoTable);
    restoreButton(buttonMyDuty);
    restoreButton(buttonMyOffers);
    
    myInfo.style.display = "block";
    startInfo.style.display = "none";
    infoTable.style.display = "none";
    myDuty.style.display = "none";
    myOffers.style.display = "none";
}

function showMyDuty(){
    changeButton(buttonMyDuty);
    restoreButton(buttonStart);
    restoreButton(buttonInfoTable);
    restoreButton(buttonMyInfo);
    restoreButton(buttonMyOffers);
    
    myDuty.style.display = "block";
    startInfo.style.display = "none";
    infoTable.style.display = "none";
    myInfo.style.display = "none";
    myOffers.style.display = "none";
}

function showMyOffers(){
    changeButton(buttonMyOffers);
    restoreButton(buttonStart);
    restoreButton(buttonInfoTable);
    restoreButton(buttonMyInfo);
    restoreButton(buttonMyDuty);
    
    myOffers.style.display = "block";
    startInfo.style.display = "none";
    infoTable.style.display = "none";
    myInfo.style.display = "none";
    myDuty.style.display = "none";
}

function restoreButton(button){
    button.style.color = "rgb(216, 213, 219)";
    button.style.background = "rgb(45, 49, 66)";
    button.style.boxShadow = "rgb(176, 215, 255) 2px 2px 0px";
}
function changeButton(button){
    button.style.color = "rgb(45, 49, 66)";
    button.style.background = "rgb(216, 213, 219)";
    button.style.boxShadow = "rgb(45, 49, 66) 1px 3px 0px";
}

function hoverButton(){
    if(this.style.color == "rgb(216, 213, 219)"){
        this.style.boxShadow = "rgb(176, 215, 255) 1px 6px 4px";
        this.style.color = "rgb(176, 215, 255)";
    }
    
    
}
function unhoverButton(){
    if(this.style.background == "rgb(45, 49, 66)"){
        this.style.boxShadow = "rgb(176, 215, 255) 2px 2px 0px";
        this.style.color = "rgb(216, 213, 219)";
    }else if (this.style.color == "rgb(216, 213, 219)"){
        this.style.boxShadow = "rgb(45, 49, 66) 1px 3px 0px"
        this.style.color = "rgb(45, 49, 66)";
    }
}

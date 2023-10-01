const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const simulationSection = document.querySelector('.simulation-section');
const simulationBox = document.querySelector('.simulation-box');
const backBtn = document.querySelector('.back-btn');
const strongdemandBtn = document.querySelector('.strongdemand-btn');
const strongdemandBox = document.querySelector('.strongdemand-box');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    simulationSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    simulationBox.classList.add('active');
}

backBtn.onclick = () => {
    simulationSection.classList.remove('active');
    popupInfo.classList.add('inactive');
    main.classList.add('active');
    simulationBox.classList.remove('active');
}


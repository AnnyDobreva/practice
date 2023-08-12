const wheel = document.querySelector(".wheel");
const startButton = document.querySelector(".spinBtn");
const result = document.querySelector(".result"); 

let deg = 0;
let sizeSector = 30; 

const sector = {
    1: "You win $20!",
    2: "You win $10!",
    3: "You win $50!",
    4: "You win $5!",
    5: "You win $200!",
    6: "You win $70!",
    7: "You win $10!",
    8: "You win $150!",
    9: "You win $20!",
    10: "You win $5!",
    11: "You win $1000!",
    12: "You win 3 FREE SPIN!",
}

const winSector = (actualDeg) => {
    const winSectorNumber = Math.ceil(actualDeg / sizeSector);
    result.innerHTML = sector[winSectorNumber];
}

startButton.addEventListener('click', function(){
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = 'all 5s ease';
    wheel.style.transform = `rotate(${deg}deg)`;  
});

wheel.addEventListener('transitionend', function(){
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;

    winSector(actualDeg);

 
});



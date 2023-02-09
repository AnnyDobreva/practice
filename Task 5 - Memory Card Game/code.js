var cards = document.querySelectorAll(".cardWrapper");
var hasFlippedCard = false;
var lockBoard = false; 
var firstCard;
var secondCard;

var id = null;

var restartButton = document.querySelector("#restartButton");

cards.forEach(function(card){
    card.addEventListener("click",flipcard);
});

restartButton.addEventListener("click", restartGame);


function flipcard(){
    
    if (lockBoard) return;
    if (this === firstCard ) return; 

    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
    }else{
        hasFlippedCard = false;
        secondCard = this;

        cheakForMatch();
    }

}

function cheakForMatch(){
    if(firstCard.dataset.planet === secondCard.dataset.planet){
        disableCard();
    }else{
       unFlipCard();
    }
}

function disableCard(){
    firstCard.removeEventListener("click", flipcard);
    secondCard.removeEventListener("click", flipcard);
}

function unFlipCard(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false; 
    },1000);
}

(function shuffle(){
    cards.forEach(function (card){
        var randomPos = Math.floor(Math.random() * 18);
        card.style.order = randomPos;
    })
})();

function restartGame(){
    location.reload(); 
}



(function timeSlider(){
    var elementSlide = document.querySelector("#innerLoading");
    var position = 0;

    clearInterval(id);
    id = setInterval(time, 10);
    
    function time(){
        if(position == 1000){
            clearInterval(id)

        }else{
            position++;
            elementSlide.style.width = position + "px" ;
        }
    }

})();
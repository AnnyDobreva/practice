document.querySelector(".plus").addEventListener("click", plusClick);

function plusClick(){
    console.log("buton is click");
    document.querySelector(".plus").style.display = "none";
    document.querySelector(".minus").style.display = "inline-block";
    document.querySelector(".tooltipWrapper").style.display = "inline-block";
}

document.querySelector(".minus").addEventListener("click", minusClick);

function minusClick(){
    console.log("buton is click");
    document.querySelector(".plus").style.display = "inline-block";
    document.querySelector(".minus").style.display = "none";
    document.querySelector(".tooltipWrapper").style.display = "none";
}
var editButton = document.querySelector(".EditPageButton");
    editButton.addEventListener('click', editButtonClick);
var asideMenu = document.querySelector(".EditPeopleWrapper");
var isEditButtonClick = false;

     function editButtonClick(){
        if(!isEditButtonClick){
            asideMenu.style.right = "0px";
            editButton.classList.add(
                                "EditPageButton--active" ,
                                "EditPageButton--active:hover"
                                );
            editButton.innerHTML = "Stop Editing";
            isEditButtonClick = true;
            }else{
            asideMenu.style.right = "-400px";
            editButton.classList.remove(
                            "EditPageButton--active" ,
                            "EditPageButton--active:hover"
                            );
            editButton.innerHTML = "Edit";
            isEditButtonClick = false;
            }
        };

var peopleCardContainer = document.querySelector(".PeopleCardsContainer");
    function addCardInformation(){
        var inputFirstName = document.getElementById("firstName").value;
        var inputJob = document.getElementById("jobCardInformation").value;
        var inputPhone = document.getElementById("phoneCardInf").value;
        var inputEmail = document.getElementById("emailCardInf").value;
        var newPerson = {  
            firstName: inputFirstName,
            job: inputJob,
            phone: inputPhone,
            email: inputEmail,
        };
        
        var div = document.createElement("div");
        div.setAttribute("class", "PersonCard");
        div.innerHTML = 
            '<div class="PersonImage"></div>' +
            '<div class="PersonName"></div>'+ 
            '<div class="personJobTitle"></div>' +
            '<div class="eMail"></div>' +
            '<div class="PersonPhoneNumber"></div>'; 
        document.getElementById("PeopleCardWrapper").appendChild(div);
        document.querySelector(".PersonName").innerHTML = newPerson.firstName;      
        peopleCardContainer.style.display = "none";
    };
   



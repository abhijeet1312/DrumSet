// alert("heel0");

function handleClick() {

    // this.style.color = "blue";
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    addanimation(buttonInnerHTML);

    // switch (buttonInnerHTML) {
    //     case "w":
    //         var tom1 = new Audio("sounds/tom-1.mp3");
    //         tom1.play();
    //         break;
    //     case "a":
    //         var tom2 = new Audio("sounds/tom-2.mp3");
    //         tom2.play();
    //         break;
    //     case "s":
    //         var tom3 = new Audio("sounds/tom-3.mp3");
    //         tom3.play();
    //         break;
    //     case "d":
    //         var tom4 = new Audio("sounds/tom-4.mp3");
    //         tom4.play();
    //         break;
    //     case "j":
    //         var snare = new Audio("sounds/snare.mp3");
    //         snare.play();
    //         break;
    //     case "k":
    //         var crash = new Audio("sounds/crash.mp3");
    //         crash.play();
    //         break;
    //     case "l":
    //         var kick = new Audio("sounds/kick-bass.mp3");
    //         kick.play();
    //         break;


    // }


}

// }
//document.querySelector("button").addEventListener("click", handleClick);


// for (var i = 0; i < 7; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// }

//BUTTON PRESS
var numberofbtn = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofbtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);


}

//KEY PRess
document.addEventListener("keypress", function(event) {
    // alert("key was pressed");

    makesound(event.key);
    addanimation(event.key);

});


function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;


    }
}

function addanimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");


    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
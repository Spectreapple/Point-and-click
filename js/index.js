document.getElementById("mainTitle").innerText = "Point and click adventure";

const offsetCharacter = 16;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const characterAudio = document.getElementById("characterAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");


gameWindow.onclick = function (e) {

    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    console.log(e.target.id);

    switch (e.target.id) {
        case "door1":
            //something insert here
            characterAudio.play();
            showSpeech("Ain't nothin here.");
            break;
        case "door2":
            //something insert here
            showSpeech("The cave is empty");
            break;
        case "tree":
            //something insert here
            showSpeech("You've come to the wrong ends brother <br> Run or you finna get popped.");
            break;
        default:
            // do something when it doesn't have a case
            hideSpeech();
            break;
    }

    //console.log(x);
}

function showSpeech(dialog) {
    mainCharacterSpeech.style.opacity = 1;
    mainCharacterSpeech.innerHTML = dialog;
}

function hideSpeech() {
    mainCharacterSpeech.style.opacity = 0;
    mainCharacterSpeech.innerHTML = "...";
}
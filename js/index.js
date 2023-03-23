document.getElementById("mainTitle").innerText = "point and click adventure";
document.getElementById("mainTitle").style.textAlign = "center";


const offsetCharacter =16;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");


gameWindow.onclick = function(e) {

   var Rect = gameWindow.getBoundingClientRect();
   var x = e.clientX - Rect.left;
   var y = e.clientY - Rect.top;
   mainCharacter.style.left = x - offsetCharacter +"px";
   mainCharacter.style.top = y - offsetCharacter + "px";
    console.log(x);


    showSpeech("does this work?");

    switch(e.target.id){
        case "door1":
            characterAudio.play(); 
            showSpeech("a cave really");
            break;
        case "door2":
            //sonething insert here
            showSpeech("Nothing here yet!");
            break;
        default:
            // do something when it doesn't have a case
            hideSpeech();
            break;

    }

}

function showSpeech(dialogue){
    mainCharacterSpeech.innerHTML = dialogue;
    mainCharacterSpeech.style.opacity = 100;
}

function hideSpeech(){
    mainCharacterSpeech.style.opacity = 0;
    mainCharacterSpeech.innerHTML = "....";
}
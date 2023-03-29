document.getElementById("mainTitle").innerText = "Point and click adventure";

const offsetCharacter = 16;

const sec = 1000;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const characterAudio = document.getElementById("characterAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

const counterSpeech = document.getElementById("counterSpeech");
const counterAudio = document.getElementById("counterAudio");
const counterCharacter = document.getElementById("counterCharacter");

gameWindow.onclick = function (e) {
    if (mainCharacterSpeech.style.opacity == 0 && counterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        switch (e.target.id) {
            case "door1":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "A chest <br> i wonder whats inside");
                break;
            case "door2":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "It's no time for bed");
                break;
            case "tree":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "This is my lucky tree! <br> it gives me good apples..");
                break;
            case "statue":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "Hey what's up cow");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                setTimeout(showSpeech, 4 * sec, counterSpeech, counterAudio, "did You just call me fat? !!MOOOOO!!");
                setTimeout(showSpeech, 8 * sec, mainCharacterSpeech, characterAudio, "No WHAT DO YOU MEAN");
                break;
            default:
                // do something when it doesn't have a case
                hideSpeech();
                break;
        }
    }
}

function showSpeech(targetBubble, targetAudio, dialogue) {
    //trigger speech bubble and audio
    targetBubble.style.opacity = 1;
    targetBubble.innerHTML = dialogue;
    targetAudio.currentTime = 0;
    targetAudio.play();
    //stop after 4 seconds the dialogue bubble and audio
    setTimeout(hideSpeech, 4 * sec, targetBubble, targetAudio);
}

function hideSpeech(targetBubble, targetAudio) {
    targetBubble.style.opacity = 0;
    targetBubble.innerHTML = "...";
    targetAudio.pause();
}
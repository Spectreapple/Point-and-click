document.getElementById("mainTitle").innerText = "Point and click adventure";

const offsetCharacter = 16;
const gameWindow = document.getElementById("gameWindow");

const sec = 1000;

let tempTimeOut;
//Items
const ruby = document.getElementById("Wheat");


//Main character
const mainCharacter = document.getElementById("mainCharacter");
const characterAudio = document.getElementById("characterAudio");
const chestAudio = document.getElementById("chestAudio");
const confettiAudio = document.getElementById("confettiAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

//Counter character
const counterSpeech = document.getElementById("counterSpeech");
const counterAudio = document.getElementById("counterAudio");
const counterPortrait = document.getElementById("counterCharacter");

//inventory
let inventory = [];
const inventoryList = document.getElementById("inventoryList");

gameWindow.onclick = function (e) {
    if (counterSpeech.style.opacity == 0 && mainCharacterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        console.log(e.target.id);

        switch (e.target.id) {
            case "door1":
                //something insert here
                if (checkItem("mysterious key")) {
                    showMessage(mainCharacterSpeech, chestAudio, "You stick the key in the chest<br>it opened..");
                    setTimeout(showMessage, 4 * sec, mainCharacterSpeech, characterAudio, "Oh some wheat ,maybe the cow will like this..");
                    removeItem("mysterious key", "mysterious key");
                    setTimeout(getItem, 4 * sec, "Wheat", "Wheat");
                } else {
                    showMessage(mainCharacterSpeech, characterAudio, "cool a chest<br>but looks like it needs a key...");
                }

                break;
            case "door2":
                //something insert here
                showMessage(mainCharacterSpeech, characterAudio, "Now is no time to sleep...");
                break;
            case "tree":
                //something insert here
                showMessage(mainCharacterSpeech, characterAudio, "This is my favorite apple tree...");
                break;
            case "signToLeft":
                //something insert here
                showMessage(mainCharacterSpeech, characterAudio, "What da tree doin???");
                break;
            case "stone":
                if (!checkItem("Wheat")) {
                    showMessage(mainCharacterSpeech, characterAudio, "Some sort of pilar.. And there are runes embeded.");
                } else {
                    showMessage(mainCharacterSpeech, characterAudio, "Wow. I feel light headed..");
                }
                break;

                case "statue":
                    if (checkItem("Wheat")) {
                        counterPortrait.style.opacity = 1;
                        showMessage(mainCharacterSpeech, characterAudio, "Here MR Cow some wheat...");
                        setTimeout(showMessage, 4 * sec, counterSpeech, confettiAudio, "you finished my quest<br>Nom Nom Nom Nom");
                        setTimeout(function () { counterPortrait.style.opacity = 0; }, 8 * sec);
                        removeItem("Wheat", "Wheat");
    
                    } else {
                        counterPortrait.style.opacity = 1;
                    showMessage(mainCharacterSpeech, characterAudio, "Hey MR Cow <br> how's it going?");
                    setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "MOOOOOOOO");
                    setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "Yeah that helps alot thanks...");
                    setTimeout(showMessage, 12 * sec, counterSpeech, counterAudio, "MOOOOOO 'Across the river look in the bushes for a key'");
                    setTimeout(function () { counterPortrait.style.opacity = 0; }, 16 * sec);
                    setTimeout(showMessage, 16 * sec, mainCharacterSpeech, characterAudio, "What's that weird voice i just heard?<br>I better go check that out then..");
                    }
                    break;
                    

            case "grave":
                if (!checkItem("mysterious key")) {
                    getItem("mysterious key", "mysterious key");
                    showMessage(mainCharacterSpeech, characterAudio, "'I reached in the bush to grab a key'<br>it looks like it might fit somewhere...");
                    setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
                } else {
                    showMessage(mainCharacterSpeech, characterAudio, "Nope nothing here...");
                    setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
                }

                break;
            default:
                // do something when it doesn't have a case
                hideMessage(mainCharacterSpeech, characterAudio);
                hideMessage(counterSpeech, counterAudio);
                break;
        }
    }
}

function showMessage(targetBalloon, targetSound, message) {
    targetSound.currentTime = 0;
    targetSound.play();
    targetBalloon.style.opacity = "1";
    targetBalloon.innerHTML = message;
    setTimeout(hideMessage, 4 * sec, targetBalloon, targetSound);
}

function hideMessage(targetBalloon, targetSound) {
    targetSound.pause();
    targetBalloon.style.opacity = "0";
    targetBalloon.innerHTML = "...";
}

function getItem(itemName, itemId) {
    if (!checkItem(itemName)) {
        inventory.push(itemName);
        showItem(itemName, itemId);
    }

}

function checkItem(item) {
    return inventory.includes(item);
}

function showItem(itemName, itemId) {
    //Make a list item from scratch and store it in a variable
    let listItem = document.createElement("li");

    //Give List Item an ID name
    listItem.id = itemId;

    //fill that list item with value of inputfield
    listItem.appendChild(document.createTextNode(itemName));

    //find UL with id todoContainer and attach the list item to it.
    inventoryList.appendChild(listItem);
}

function removeItem(itemName, itemId) {
    //remove item in Array
    inventory = inventory.filter(function (newInventory) {
        return newInventory !== itemName;
    });
    //removes list element in HTML
    document.getElementById(itemId).remove();

}
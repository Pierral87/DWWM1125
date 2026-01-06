// Ici il va falloir mettre des evenements aussi bien en click sur les boutons qu'en touche clavier associée

// Ces evenements vont changer le style du bouton (la classe .pressed est déjà présente dans le css)

// Egalement, ces evenements vont lancer la lecture du sound associé (présent dans le dossier sounds)

// pour lire un son, il faut utiliser l'objet Audio 

// par exemple   let cymbal = new Audio("sounds/sounds_crash.mp3");
        // cymbal.play();



        // Il faut mettre en place des évènements aussi bien pour le click sur chacun des boutons 
                // que, sur la touche préssée correspondant à chaque bouton
        // L'idéal étant d'englober le comportement dans une fonction


// Selection de tous les boutons 

// Boucle sur tous les boutons pour appliquer l'event click  
        // Il faut récupérer l'innerHTML ou innerText pour comprendre la valeur du bouton cliquée (ce qui me permet de lancer le son en fonction du text du bouton par exemple k la cymbale, l la grosse caisse)


// Ensuite evenement keypress, on peut récupérer sur l'event, quelle est la touche qui a été pressée 
        // function(event) {
                //  je suis capable de récupérer la touche en faisant event.key 
        // }


        // On peut englober ça dans une fonction qui se base sur la touche récupérée (car dans le click et dans le keypress, on récupère une lettre)
        // Dans cette fonction, on gère un if qui en fonction de la lettre va jouer le son ainsi que de changer la classe du bouton pour le considérer pressé

        let listButtons = document.getElementsByTagName("button");

// CLICK mousedown
for (let i = 0; i < listButtons.length; i++) {
    listButtons[i].addEventListener("mousedown", function (event) {
        let buttonText = this.innerHTML;
        makeSound(buttonText);
        // console.log(event);
    })
};


// KEYPRESS 
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
})

// Permet de jouer un son
function makeSound(letterClickedOrPressed) {

    switch (letterClickedOrPressed) {

        case "w":
            let tom1 = new Audio("sounds/sounds_tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/sounds_tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/sounds_tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/sounds_tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let tom5 = new Audio("sounds/sounds_snare.mp3");
            tom5.play();
            break;

        case "k":
            let tom6 = new Audio("sounds/sounds_crash.mp3");
            tom6.play();
            break;

        case "l":
            let tom7 = new Audio("sounds/sounds_kick-bass.mp3");
            tom7.play();
            break;
    }

    buttonAnimation(letterClickedOrPressed);
}

function buttonAnimation(letterClickedOrPressed){
    // On doit spécifier l'indice car on reçoit un HTMLCollection même si nous n'avons qu'un seul élément à l'intérieur
    let button = document.getElementsByClassName   (letterClickedOrPressed)[0];
    console.log(button);
    button.classList.add("pressed");

    setTimeout(function() {
        button.classList.remove("pressed");
    }, 200);

}
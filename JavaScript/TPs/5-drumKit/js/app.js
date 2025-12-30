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
document.addEventListener("DOMContentLoaded", () => {

    /* 
    
    3 Façons de mettre en place un évènement js : 
    ----------------------------------------------------
    
    Anciennement : 
    -----------------------
    1 - Par un attribut html d'évènement exemple : onclick=""
    <div onclick="confirm('Voulez vous vraiment supprimer cet élément ?')">Supprimez l'élément</div>
    
    2 - Par l'évènement directement en js 
    document.querySelector("#id").onclick = function() {
    }
    
    3 - La bonne pratique : On rajoute un écouteur d'évènement 
    document.querySelector("#id").addEventListener('click', function() {
        // Code .....
        // Code .....
    })
    
    // addEventListener permet d'ajouter plusieurs évènements identiques mais avec des comportements potentiellement différent, alors que le .onclick va écraser les précédents évènements 
    
    */

    // Si je veux manipuler le div1, je peux le sélectionner au préalable mais... Ce n'est pas obligatoire
    // let div1 = document.querySelector("#div1");
    // EVENEMENT CLICK 
    document.querySelector("#div1").addEventListener("click", function () {
        // A l'intérieur d'un évènement, je peux récupérer l'élément qui a été la cible de l'évènement, à savoir le div
        // Il sera représenté à l'intérieur de la fonction par "this"
        console.log("J'ai cliqué le div1!!");

        // Ci dessous je récupère la couleur actuelle de mon élément
        // ATTENTION, si la couleur de l'élément est défini uniquement dans le CSS, Javascript n'est pas capable de l'atteindre :(     
        // Pour pouvoir récupérer une information, elle doit être présente dans le html (donc dans notre div1 nous avons respécifié la couleur dans l'attribut style de la balise)
        let couleurActuelle = this.style.backgroundColor;

        // Si la couleur est cornflowerblue, je change pour red et j'augmente le width 
        // etc etc
        if (couleurActuelle == "cornflowerblue") {
            this.style.backgroundColor = "red";
            this.style.width = "200px";
        } else if (couleurActuelle == "red") {
            this.style.backgroundColor = "orange";
            this.style.height = "200px";
        } else if (couleurActuelle == "orange") {
            this.style.backgroundColor = "purple";
            this.style.width = "100px";
        } else {
            this.style.backgroundColor = "cornflowerblue";
            this.style.height = "100px";
        }
    })

    // EVENEMENT DOUBLE CLICK
    document.querySelector("#div2").addEventListener("dblclick", function () {
        console.log("J'ai double cliqué div2");
        // this.style.left = "100px";

        let posTop = this.style.top;
        let posLeft = this.style.left;

        if (posTop == "0px" && posLeft == "0px") {
            this.style.left = "100px";
        } else if (posTop == "0px" && posLeft == "100px") {
            this.style.top = "100px";
        } else if (posTop == "100px" && posLeft == "100px") {
            this.style.left = "0px";
        } else {
            this.style.top = "0px";
        }

    })

    // EVENEMENT MOUSEENTER & MOUSELEAVE

    let listeImages = document.querySelectorAll("#blocImage1 img");
    console.log(listeImages);

    document.querySelector("#blocImage1").addEventListener("mouseenter", function () {
        console.log("hello je rentre sur l'image");

        listeImages[0].style.top = "-360px";
        listeImages[1].style.top = "-360px";
    })

    // EXERCICE : Remettre les images dans leur position initiale lorsque l'on sort du survol avec la souris (event mouseleave)





});
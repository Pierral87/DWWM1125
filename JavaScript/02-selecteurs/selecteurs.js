document.addEventListener("DOMContentLoaded", () => {

    /* 
    
        DOM : Document Object Model 
        ------------------------------
    
        - Le DOM représente notre page mais comprise de manière informatique
        - En gros, c'est une interface interne aux navigateurs
        - Le DOM permet que chaque élément html, chaque attribut, chaque évènement est en fait un objet récupérable et manipulable avec javascript 
        - Les selecteurs en js, me permettent de selectionner des elements html et y apporter des modifications
    
    */

    // ------------------------------------------
    // -- SELECT PAR L'ID -----------------------
    // ------------------------------------------

    let sectionElem = document.getElementById("maSection");

    console.log("Section : " + sectionElem);
    console.log(sectionElem);
    // On remarque dans la console que notre element est un "object HTMLElement"
    // Dans cet objet sont contenues des dizaines et des dizaines de propriétés ! Je peux manipuler ces propriétés si je le souhaite !

    // Par exemple, je peux modifier le contenu html et insérer un titre différent 
    sectionElem.innerHTML = "<h3>Bonjour à tous</h3>";
    // Je peux manipuler également le css de mon élément en passant par son attribut style : 
    sectionElem.style.backgroundColor = "steelblue";
    sectionElem.style.fontSize = "42px";
    sectionElem.style.padding = "30px";

    sectionElem.title = "Un test ici";


    // ------------------------------------------
    // -- SELECT PAR LE NOM DE CLASSE -----------
    // ------------------------------------------
    let mesElemDiv = document.getElementsByClassName("mesDivs");
    console.log("Mes elements div : " + mesElemDiv);// object HTMLCollection, une HTMLCollection c'est un ensemble d'element HTML
    console.log(mesElemDiv); // Je remarque qu'ils sont sous forme de array ! 

    // On change le texte dans le premier element 
    mesElemDiv[0].textContent = "On est vendredi !";

    // en JS natif pour impacter tous les éléments d'une collection HTML, on doit faire une boucle ! 

    for (let i = 0; i < mesElemDiv.length; i++) {
        // la prop cssText va remplacer tout le contenu de l'attribut style 
        mesElemDiv[i].style.cssText = 'font-family: sans-serif; font-size: 21px; color: orange; background-color: lightblue; padding: 10px;';
        mesElemDiv[i].style.marginTop = "10px";

        // EXERCICE : Affichez une background-color différente sur le deuxième élément 

        // mesElemDiv[1].style.backgroundColor = "blue";

        if (i == 1) {
            mesElemDiv[i].style.backgroundColor = "blue";
        }

        // autre façon de gérer un attribut : setAttribute()
        mesElemDiv[i].setAttribute('title', 'Le titre des divs');

        // setAttribute() // permet de faire une affectation dans un attribut
        // getAttribute() // permet de récupérer la valeur d'un attribut spécifique
    }

    // ------------------------------------------
    // -- SELECT PAR LE NOM DE BALISE -----------
    // ------------------------------------------  

    let mesElemP = document.getElementsByTagName("p");
    console.log("Mes elements p : " + mesElemP);
    console.log(mesElemP);

    // Exercice : Appliquer du css sur ces balises via une boucle 
        // Appliquez une couleur différente sur chaque p dans la boucle (bien sur notre code doit s'adapter au fait qu'il y est un nombre de p inconnu et variable)

});
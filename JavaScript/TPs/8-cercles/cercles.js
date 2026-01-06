// Ici objectif : 

// Sur ma page blanche, à chaque fois que je clique quelque part un cercle apparait, puis tombe jusqu'au bas de la page et disparait

// Le cercle se crée sur la position du click de la souris
// Le cercle a une taille et une couleur aléatoire 
// Lorsqu'il se déplace jusqu'au bas de la page, le cercle est entière visible, puis dès qu'il touche il disparait en fondu 

// Il va falloir utiliser ici la position absolute sur l'élément pour pouvoir le déplacer facilement
// Il va falloir manipuler les coordonnées X Y   basées sur l'event    event.pageX event.pageY

// Du random pour la taille, du random pour la couleur 

// Du createElement, du appendChild  

// Un event "transitionend"


document.addEventListener("DOMContentLoaded", function () {
    // Ici j'ai 20 couleurs donc des positions allant de 0 à 19
    // Pour récupérer une valeur dans un tableau : monTableau[0]
    // Pour récupérer une couleur aléatoire dans mon tableau je dois générer un index aléatoire entre 0 et 19 

    // Pour tout ce qui est aléatoire => Math => random 
    var list_colors = ['#1abc9c', '#2ecc71', "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];

    // Capter l'évènement click sur le body
    document.addEventListener("click", function (event) {

        // récupérer la position du click (abscisse et ordonnée) => objet event
        var x = event.pageX;
        var y = event.pageY;

        // Générer une hauteur et une largeur aléatoire (entre 50 et 150)
        // Il faut les deux mêmes valeurs pour avoir un vrai cercle
        var widthHeightRandom = Math.floor(50 + 100 * Math.random());

        // Générer une couleur aléatoire
        var randomColor = list_colors[Math.floor(19 * Math.random())];

        // On créé un élément et on y ajoute tous les attributs dont nous avons besoin
        var circle = document.createElement("div");
        circle.style.position = "absolute";
        circle.style.top = y - widthHeightRandom / 2 + "px";
        circle.style.left = x - widthHeightRandom / 2 + "px";
        circle.style.backgroundColor = randomColor;
        circle.style.height = widthHeightRandom + "px";
        circle.style.width = widthHeightRandom + "px";
        circle.style.borderRadius = "50%";
        circle.style.opacity = 1;
        circle.style.transition = "opacity 0.5s";

        // Utiliser une méthode pour ajouter la div au body 
        document.body.appendChild(circle);

        // Obtenir la height de la page 
        var windowHeight = window.innerHeight;

        // On récupère le dernier div créé ainsi que sa position par rapport au top
        var divs = document.getElementsByTagName("div");
        var lastDiv = divs[divs.length - 1];


        // On récupère la taille de la fenetre pour la comparer avec aussi la taille de notre élément pour comprendre quand est ce que notre élément atteint le bottom
        var windowHeight = window.innerHeight;
        var widthHeightRandom = lastDiv.offsetHeight;
        // On applique la transition sur l'élément top en 1 seconde
        lastDiv.style.transition = "top 1s";
        lastDiv.style.top = windowHeight - widthHeightRandom + "px";

        // On ajoute un évènement pour savoir quand est ce que la transition est terminée pour appliquer une transition sur l'attribut opacity en 0.5sec jusqu'à 0 pour sa disparition, s'en suit ensuite le remove du document
        lastDiv.addEventListener("transitionend", function () {
            lastDiv.style.transition = "opacity 0.5s";
            lastDiv.style.opacity = 0;
            setTimeout(function () {
                lastDiv.remove();
            }, 500);
        });
    });
});

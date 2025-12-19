document.addEventListener("DOMContentLoaded", () => {

    // Commentaire JS sur une seule ligne

    /* 
    
        Commentaire JS
    Entre
        Les
         deux
         selecteurs 
    */

    /*
    
        SOMMAIRE : 
        --------------------
    
                --- Intro (voir powerpoint/pdf)
    
            --- Chapitre 1 : Affichage
            --- Chapitre 2 : Variables - Déclaration, affectation
            --- Chapitre 3 : Type de données
            --- Chapitre 4 : Quotes
            --- Chapitre 5 : Concaténation
            --- Chapitre 6 : Opérateurs arythmétique
            --- Chapitre 7 : Conditions & Opérateurs de comparaison
            --- Chapitre 8 : Structure itérative : Boucle
            --- Chapitre 9 : Fonctions prédéfinies
            --- Chapitre 10 : Fonctions utilisateurs
            --- Chapitre 11 : Tableaux de données ARRAY
            --- Chapitre 12 : Les objets globaux
            --- Chapitre 13 : Les objets
    
    */

    // JavaScript est exécuté par le navigateur, via une interface interne du navigateur 
    // Nous avons un ensemble d'outils disponibles pour intéragir avec le js au travers du navigateur
    // la console dans la barre d'outil du navigateur (F12)

    // dans le js, on a accès à quelques éléments à savoir 
    // - window  représente une fenêtre (onglet) du navigateur
    // - document représente la page web chargée dans le navigateur 

    // Toutes les instructions JavaScript se finissent par ";"

    // Les erreurs JS sont visibles par défaut dans la console du navigateur 

    // Le document nous permet d'aller récupérer des éléments de notre page pour intéragir dessus
    // document.getElementById("unId")   permet d'aller récupérer un élément ayant l'id "unId"
    // document.getElementById("unId").textContent =  "du texte"   permet de modifier le contenu texte de l'element
    // document.getElementById("unId").innerHTML = "du texte ou de l'html"   permet de modifier le contenu de l'element, y compris html interprété 



    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // ---------- CHAPITRE 1 : AFFICHAGE ---------------------------------------
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    // Boite de dialogue 
    // -----------------------------
    // alert("Bonjour à tous");   // Nous permet d'afficher un message à l'utilisateur 
    // confirm("Voulez vous vraiment supprimer ce produit ?"); // Permet de récupérer une confirmation utilisateur (OK ou Annuler)
    // prompt("Quel âge avez vous ?"); // On peut récupérer la saisie dans une variable 
    // let prenom = prompt("Quel est votre prenom ?");  // Ici j'ai récupéré dans une variable la saisie du prompt 
    // document.write("Bonjour " + prenom);  // Je suis capable ensuite de réappeler cette variable 

    // Ces boites de dialogues sont utilisées pour délivrer une information à l'utilisateur, nous pouvons les retrouver sur de nombreux site
    // Ceci dit, ce sont des outils "système" on préfèrera à terme, utiliser des vraies saisies html au travers de form dans une modale par exemple

    // Affichage dans la console navigateur (F12)
    // -------------------------------
    // console.log(prenom);
    // Je me sert de la console pour vérifier des informations, soit des valeurs de variables par rapport à une saisie ou une action
    // Si un évènement se passe bien
    // Si je passe bien à un endroit spécifique de mon code 
    console.log("Coucou");
    console.info("Test avec console info");


    // Affichage dans la page (document) 
    // ----------------------------------------
    // Pour ajouter du contenu dans ma page html, j'ai besoin d'abord de savoir dans quel endroit ?
    // Pour ça, je vais sélectionner un élément du document, ici pour mon chapitre1, j'ai un div avec un id contenuChapitre1, je vais le selectionner
    document.getElementById("contenuChapitre1").textContent = "Contenu que je rajoute dans le div du chapitre 1 <hr>";
    // Ci dessus, le textContent me permet de rajouter du texte à l'intérieur de ma balise div, par contre le html n'est pas interprété ! 
    // Si je veux l'interpréter alors je dois utiliser innerHTML 
    // Egalement on remarquera que le deuxieme appel d'un changement de contenu écrase totalement le précédent
    // On verra plus tard grâce à la concaténation qu'il est possible de "rajouter" plutôt que "d'écraser"
    document.getElementById("contenuChapitre1").innerHTML = "Un autre contenu via innerHTML<hr>";


    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // ---------- CHAPITRE 2 : Variables - Déclaration, affectation ------------
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    // Une variable est un espace nommé permettant de conserver une valeur 
    // Une valeur possède un type, on parle de pseudo type ou type primitif 

    // ------------------
    // DECLARATION AVEC var 
    // ------------------

    var maBoite; // Déclaration d'une variable nommée "maBoite"

    // Le mot clé var permet de déclarer une variable "globale", caractères autorisés : 0-9, A-Z, a-z et _ 
    // ATTENTION JAVASCRIPT EST SENSIBLE A LA CASSE, exemple : var ABC est différent de var abc 
    // Il n'est pas possible de déclarer une variable commençant par un chiffre 

    // ---------------
    // AFFECTATION 
    // ---------------

    maBoite = 10; // Affectation de la valeur numérique 10 dans la variable "maBoite" 
    console.log(maBoite); // Je me sers de ma console pour vérifier la bonne existence et bonne affectation de la valeur 10 dans maBoite 

    var elementChapitre2 = document.getElementById("contenuChapitre2");
    console.log(elementChapitre2);
    elementChapitre2.innerHTML = "Une variable est un espace nommé permettant de conserver une valeur";
    elementChapitre2.innerHTML += "<br>Une valeur possède un type, on parle de pseudo type ou type primitif";

    // --------------------
    // DECLARATION AVEC let 
    // -------------------- 

    let autreVar = "test";
    autreVar = "une autre valeur"; // changement de valeur pour la variable autreVar, on ne réécrit pas le mot let  

    // Différences entre var et let 

    // 1 - 
    // Une variable déclarée avec let n'existe que dans le bloc où elle a été déclarée 
    // Un bloc en javascript est à l'intérieur d'accolades, par exemple, une condition, une fonction, une boucle {}
    // if (condition) {   // bloc     }
    // function qqchoz() {  // bloc     }
    // while(condition)   {   // bloc    }

    {
        let testLet = "Un test avec let dans les accolades";
        elementChapitre2.innerHTML += "<br>Affichage dans le même bloc d'une variable déclaré avec let : " + testLet;
    }

    // elementChapitre2.innerHTML += "<br>Affichage hors bloc d'une variable déclaré avec let : " + testLet;
    // La ligne ci dessus me génère une erreur dans la console, car testLet n'est pas défini en dehors de son bloc !  


    // --------------------
    // DECLARATION AVEC const
    // -------------------- 
    // Similaire à let (const a uniquement une portée bloc) par contre, obligé d'affecter une valeur lors de la déclaration car ce n'est pas une variable, c'est une constante !
    // Une constante prends une valeur et n'en change jamais   

    const testConst = "une Constante";
    console.log(testConst);
    // testConst = "Autre valeur pour la constante";
    // Erreur à la ligne ci dessus, je ne peux pas redéfinir une constante, car justement, son but est de toujours conserver la même valeur 

    // EXERCICE 01
    // Quelles seront les valeurs des variables A B C et D après le code suivant ? 
    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;

    A = 3.5;
    B = 1.5;
    C = A + B;
    B = A + C;
    A = B;

    console.log("Voici la valeur de A : " + A);
    console.log("Voici la valeur de B : " + B);
    console.log("Voici la valeur de C : " + C);
    console.log("Voici la valeur de D : " + D);

    // -----------------------------
    let conducteur = "Sam";
    let passager = "Bob";
    // Exercice : inverser les valeurs de ces deux variables 
    // Ici pour échanger ces deux valeurs, c'est possible en utilisant une variable intermédiaire ! 
    let temp = conducteur; // ici temp contient maintenant Sam
    conducteur = passager; // Je met Bob à la place de Sam dans le conducteur
    passager = temp; // Je met Sam contenu dans temp, à la place de Bob dans le passager, à partir de là les valeurs sont inversées :) 
    console.log("conducteur : " + conducteur);
    console.log("passager : " + passager);


    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // ---------- CHAPITRE 3 : Type de données (pseudo type / type primitif) ---
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    // A partir de maintenant on va stocker les selections de nos div dans des variables, pour les manipuler plus simplement
    let elementChapitre3 = document.getElementById("contenuChapitre3");

    maBoite = 10;

    elementChapitre3.innerHTML += "Valeur contenue dans la variable maBoite : " + maBoite;

    // Pour voir le type de donnée contenu dans la variable, je vais utiliser l'instruction typeof 
    // L'instruction typeof renvoie une chaine de caractère indiquant le type de l'élément 
    elementChapitre3.innerHTML += "<br>Type de la donnée dans la variable maBoite : " + maBoite;
    elementChapitre3.innerHTML += typeof maBoite; // type = number => type numérique 
    console.log(typeof maBoite);

    maBoite = '10';
    elementChapitre3.innerHTML += "<br>Type de la donnée dans la variable maBoite : " + maBoite;
    elementChapitre3.innerHTML += typeof maBoite; // type = string => chaine de caractère car on a mis des guillemets ! 
    console.log(typeof maBoite);

    maBoite = "Bonjour";
    elementChapitre3.innerHTML += "<br>Type de la donnée dans la variable maBoite : " + maBoite;
    elementChapitre3.innerHTML += typeof maBoite; // type = string => chaine de caractère car on a mis des guillemets ! 
    console.log(typeof maBoite);

    maBoite = -10;
    elementChapitre3.innerHTML += "<br>Type de la donnée dans la variable maBoite : " + maBoite;
    elementChapitre3.innerHTML += typeof maBoite; // type = number 
    console.log(typeof maBoite);

    maBoite = 5.6;
    elementChapitre3.innerHTML += "<br>Type de la donnée dans la variable maBoite : " + maBoite;
    elementChapitre3.innerHTML += typeof maBoite; // type = number - dans d'autres langages, on appelera ça des float ou double 
    console.log(typeof maBoite);

    // Les booléens (boolean)
    // deux valeurs possibles : vrai ou faux => true ou false 
    // Toute chose en informatique, se retranscrit par une valeur booléenne implicite, toute chose en informatique vaut vrai ou faux 
    let choix = true;
    choix = false;
    console.log(choix);
    elementChapitre3.innerHTML += "<br>Type de la donnée dans la variable choix : " + choix;
    elementChapitre3.innerHTML += typeof choix;

    // Une variable qui n'existe pas : 
    elementChapitre3.innerHTML += "<br>Type d'une variable non déclarée' : ";
    elementChapitre3.innerHTML += typeof existePas;


    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // ---------- CHAPITRE 4 : Quotes ------------------------------------------
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    // Les quotes, pour les chaines de caractères 
    let elementChapitre4 = document.getElementById("contenuChapitre4");

    let chaine = "Salut";

    // Simple quote (apostrophe)
    elementChapitre4.innerHTML += 'Hello chaine<br>'; // '' ou "" : aucune différence, juste un choix du développeur // les variables ne sont pas interprétées
    // Double quote (guillemets)
    elementChapitre4.innerHTML += "Bonjour chaine<br>"; // '' ou "" : aucune différence, juste un choix du développeur // Les variables ne sont pas interprétées 
    // Back quote (accent grave)
    elementChapitre4.innerHTML += `Ola ${chaine}<br>`; // Grâce aux back quote (accent grave, raccourci alt gr 7) il est possible d'interpréter une variable à l'intérieur de la chaine, par contre il faut la mettre entre accolades et avec un $ devant 


    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // ---------- CHAPITRE 5 : Concaténation -----------------------------------
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    let elementChapitre5 = document.getElementById("contenuChapitre5");
    // La concaténation permet d'assembler des chaines de caractères les unes avec les autres 
    // Pour faire une concaténation on utilise le symbole "+" que l'on peut traduire par "suivi de"

    let prenom1 = "Pierre";
    let prenom2 = "Alexandre";

    elementChapitre5.innerHTML += "<hr>Bonjour " + prenom1 + "-" + prenom2 + ", bienvenue sur notre site <br>";

    // Ici l'affection prenom = "Alexandre" écrase la valeur d'origine prenom, ainsi je n'arrive pas à avoir Pierre-Alexandre
    let prenom = "Pierre";
    prenom = "Alexandre";
    console.log(prenom);

    // Ci dessous, je dis que prenom est égal à lui même concaténé d'une nouvelle valeur pour former Pierre-Alexandre
    prenom = "Pierre";
    prenom = prenom + "-Alexandre"; // Par contre je remarque une répétition à cette ligne
    console.log(prenom);
    // En programmation on fait toujours sorte d'avoir un code dit : DRY pour Dont Repeat Yourself, c'est à dire, on essaie d'éviter au maximum les répétitions

    // Ci dessous, une syntaxe raccourcie d'écriture pour la même opération, le += indiquant "je rajoute à la suite de la valeur existante"
    prenom = "Pierre";
    prenom += "-Alexandre"; // équivaut à prenom = prenom + "-Alexandre"
    console.log(prenom);

    let erreur;

    // Ici serait le résultat d'une vérification de taille sur le pseudo 
    erreur += "<hr><p class='couleur_rouge'>Erreur sur le pseudo</p>";

    // Ici serait le résultat d'une vérification sur le format d'email
    erreur += "<hr><p class='couleur_rouge'>Le mail n'est pas du bon format</p>";

    // Ici serait le résultat d'une vérification sur la longueur du mot de passe 
    erreur += "<hr><p class='couleur_rouge'>Le mot de passe est trop court</p>";

    elementChapitre5.innerHTML += "<br>" + erreur;

    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // ---------- CHAPITRE 6 : Opérateurs arythmétiques ------------------------
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    let elementChapitre6 = document.getElementById("contenuChapitre6");

    // Addition
    let resultat = 10 + 5; // Ici le système comprend bien qu'entre deux numbers on parle d'une addition et non pas d'une concaténation
    elementChapitre6.innerHTML += resultat + "<br>";
    resultat = "10" + "5"; // Ici ce sont des string numérique, le système ne comprend pas la demande d'une addition et fait plutot une concaténation 
    elementChapitre6.innerHTML += resultat + "<br>";

    // Soustraction
    resultat = 10 - 5;
    elementChapitre6.innerHTML += resultat + "<br>";

    // Multiplication
    resultat = 10 * 5;
    elementChapitre6.innerHTML += resultat + "<br>";

    // Division
    resultat = 10 / 5;
    elementChapitre6.innerHTML += resultat + "<br>";

    // Puissance
    resultat = 10 ** 5;
    elementChapitre6.innerHTML += resultat + "<br>";

    // Modulo 
    // Le modulo représente le reste d'une division sous forme d'entier
    // Par exemple 10 % 3, à l'intérieur de 10, nous avons, 3 fois 3... Ce qui nous amène à 9, il reste donc 1 ! donc 10 % 3 nous donne un résultat de "1"
    resultat = 10 % 3;
    elementChapitre6.innerHTML += resultat + "<br>";

    // Attention si on cumule des opérations et de la concaténation, JS perds ses moyens... Pour éviter toute incohérence il faudra rajouter des parenthèses à l'opération 
    elementChapitre6.innerHTML += "Voici un résultat d'une opération 50 - 5 : " + (50 - 5) + "<br>";

    let chiffre1 = 10;
    let chiffre2 = 5;

    // Ci dessous des raccourci d'écriture équivalents à : chiffre1 = chiffre1 + chiffre2  etc etc 
    chiffre1 += chiffre2;
    console.log(chiffre1);
    chiffre1 -= chiffre2;
    console.log(chiffre1);
    chiffre1 *= chiffre2;
    console.log(chiffre1);
    chiffre1 /= chiffre2;
    console.log(chiffre1);
    chiffre1 %= chiffre2;
    console.log(chiffre1);

    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // ---------- CHAPITRE 7 : Conditions & opérateurs de comparaison ----------
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    let elementChapitre7 = document.getElementById('contenuChapitre7');
    // Une condition permet de prévoir différents cas possibles
    // Une condition ne peut recevoir qu'une réponse de type true / false 

    let a = 10;
    let b = 5;
    let c = 2;

    if (a > b) { // si "a" est strictement est supérieur à "b"
        // Si la condition dans les parenthèses du if vaut "true" c'est à dire si la condition est vraie, alors toutes les lignes à l'intérieur des accolades du if vont s'exécuter
        elementChapitre7.innerHTML += "La valeur de la variable 'a' est bien supérieure à la valeur de la variable 'b'<br>";
        // Une fois le code exécuté, on sort du bloc entier, on ne passera PAS par le else
    } else { // JAMAIS de () sur un else = représente toutes les autres possibilités 
        // Je tombe dans le else, uniquement si le cas if est faux, else représente toutes les autres possibilités, le code entier de ces accolades là s'exécute
        elementChapitre7.innerHTML += "La valeur de la variable 'a' n'est PAS supérieure à la valeur de la variable 'b'<br>";
    }

    console.log("Je suis après le if");

    // Plusieurs conditions obligatoires => AND : && 
    if (a > b && b > c) {
        // Je rentre ici seulement si les DEUX conditions sont vraies ! 
        // Si l'une ou l'autre est fausse, alors je tomberai dans le else (s'il y en a un)
        elementChapitre7.innerHTML += "YES les deux conditions sont bonnes !<br>";
    }

    // Au moins une des conditions => OR : || 
    // ATTENTION, on met bien un double égal !!! un simple égal = c'est une affectation ! une double égal = c'est une comparaison ! 
    if (a == 9 || b > c) {
        elementChapitre7.innerHTML += "OUI au moins une condition est bonne !<br>";
    }

    a = 8;
    b = 5;
    c = 2;


    // if / else if / else 
    if (a == 8) {
        elementChapitre7.innerHTML += "Réponse A<br>";
    } else if (a != 10) { // Ou sinon
        elementChapitre7.innerHTML += "Réponse B<br>";
    } else if (c > b) { // Ou sinon 
        elementChapitre7.innerHTML += "Réponse C<br>";
    } else { // sinon, tous les autres cas 
        elementChapitre7.innerHTML += "La réponse D<br>";
    }

    console.log("Je sors");


    let test = true;

    // Lorsque je mets un point d'exclamation devant une variable ou une instruction, on s'intéresse à demander l'inverse de ce qu'elle vaut vraiment
    // par exemple ici ma variable test vaut true, si je fais une verif sur !test   c'est à dire que je m'intéresse à rentrer dans la condition justement si elle vaut false
    if (!test) {
        elementChapitre7.innerHTML += "Ici je rentre tant que la condition est true, on attend la valeur implicite de notre condition, toute condition en programmation vaut forcement true ou false";
    }

    let chaineCarac = "Bonjour";

    if (chaineCarac) {
        elementChapitre7.innerHTML += "Ici je rentre tant que la variable existe et a une valeur, on attend la valeur implicite de notre condition, toute condition en programmation vaut forcement true ou false";
    }

    // Plusieurs valeurs sont considérées false en programmation :
    // 0, -0, 0.0, null, false, NaN, undefined, une chaine de caractère vide, un tableau array vide 

    // Pour vérifier la valeur booléenne d'une instruction, en JS on peut utiliser l'objet/instruction Boolean 
    console.log("Valeur Boolean de chaineCarac : " + Boolean(chaineCarac));

    // Les Conventions de nommage : 
    // camelCase : commence par des minuscules et prends une majuscule pour la première lettre de chaque nouveau mot : pour les variables, les noms de fonctions
    // PascalCase : une majuscule à chaque mot, même le premier : pour les classes 
    // snake_case : tout en minuscule, on sépare les mots par des underscores : pour les champs d'une table de base de données
    // kebab-case : tout en minuscule, on sépare les mots par des tirets : souvent pour les classes html/css


    let var1 = 1; // type number
    let var2 = "1"; // type string 

    elementChapitre7.innerHTML += "<hr><hr>";

    // Ici, même si les deux variables sont de types différents, la condition vaut true et on rentre dans le if
    // Pourquoi ? Car avec un double égale, on fait simplement une comparaison de valeur et pas de type ! donc 1 en number et 1 en string, pour JS, c'est pareil en valeur ! 
    if (var1 == var2) {
        elementChapitre7.innerHTML += "Les deux variables ont la même valeur";
    }
    elementChapitre7.innerHTML += "<hr><hr>";

    // Pour y rémédier, on fait ce qu'on appelle une comparaison stricte, grâce à un triple égal 
    if (var1 === var2) {
        // Je rentre ici uniquement si les deux var ont la même valeur et aussi le même type si 1 et "1" ça ne fonctionne pas, si 1 et 1 ou "1" et "1" là, c'est OK!
        elementChapitre7.innerHTML += "Les deux variables ont la même valeur ET le même type";
    }


    /* 
        OPERATEURS DE COMPARAISON : 
        ----------------------------------

        =       affectation (ce n'est pas une comparaison !)
        ==      est égal à (uniquement valeur)
        ===     est strictement égal à (en terme de valeur et de type)
        !=      est différent de (en terme de valeur)
        !==     strictement différent (en valeur et en type)
        >       strictement supérieur
        >=      supérieur ou égal
        <       strictement inférieur
        <=      inférieur ou étal 

    */

    // Quelques autres syntaxes des if 
    // On peut faire un if sans accolades, tant qu'il n'y a qu'une seule instruction pour le if et pour le else
    if (var1 == var2) elementChapitre7.innerHTML += "les deux var ont la meme valeur";
    else elementChapitre7.innerHTML += "les deux var n'ont PAS la même valeur";

    // On peut aussi ne pas mettre le else si nous n'avons pas besoin de le gérer 
    if (var1 == var2) elementChapitre7.innerHTML += "les deux var ont la meme valeur";

    // Ecriture ternaire 
    // C'est la syntaxe la plus courte des if, on s'en sert lorsque l'action engendré par le if et le else sont les mêmes ! 
    // Par exemple ici, mon action est identique dans le if et le else, j'appelle elementChapitre7.innerHTML pour rajouter du contenu sur ma page
    // Ca pourrait être aussi une affectation 
    // action (condition) ? .....if.....  : .....else....  ;
    // le ? représente le if 
    // les : représentent le else 
    elementChapitre7.innerHTML += (var1 == var2) ? "les deux var ont la meme valeur" : "les deux var n'ont PAS la même valeur";

    // On utilise aussi souvent des fonctions qui vérifient les types de nos éléments, par exemple isNaN 
    if (isNaN(var1)) {
        elementChapitre7.innerHTML += "La valeur n'est PAS numérique";
    } else {
        elementChapitre7.innerHTML += "La valeur EST pas numérique";
    }

    let couleur = "bleu";

    switch (couleur) {
        case "bleu":
            elementChapitre7.innerHTML += "Vous aimez le bleu<hr>";
            break;
        case "vert":
            elementChapitre7.innerHTML += "Vous aimez le vert<hr>";
            break;
        case "rouge":
            elementChapitre7.innerHTML += "Vous aimez le rouge<hr>";
            break;
        default:
            elementChapitre7.innerHTML += "Vous n'aimez ni le bleu ni le vert ni le rouge !<hr>";
            break;
    }

    // EXERCICE 1 : Refaire cette condition switch en if elseif else 
    // Ensuite, faire en sorte que la couleur soit choisie par une saisie utilisateur 
    // let color = prompt("Quel est votre couleur préférée ?");
    // if (color == "bleu") {
    //     elementChapitre7.innerHTML += "Vous aimez le bleu<hr>";
    // } else if (color == "vert") {
    //     elementChapitre7.innerHTML += "Vous aimez le vert<hr>";
    // } else if (color == "rouge") {
    //     elementChapitre7.innerHTML += "Vous aimez le rouge<hr>";
    // } else {
    //     elementChapitre7.innerHTML += "Vous n'aimez ni le bleu ni le vert ni le rouge !<hr>";
    // }

    // EXERCICE 2 : J'aimerai savoir si l'utilisateur est majeur, basé sur une saisie 
    // Demander l'âge de l'utilisateur, qu'il puisse le saisir
    // Faire une condition qui vient tester si l'âge est au moins 18 
    // Si oui, afficher un message de bienvenue
    // let agePrompt = prompt("Quel est votre âge ?");
    // if (agePrompt >= 18) alert("Bienvenue au nouveau");
    // else alert("Vous n'êtes pas autorisé à rentrer");

    // Ci dessous en if ternaire
    // elementChapitre7.innerHTML += (agePrompt >= 18) ? "Bienvenue au nouveau" : "Vous n'êtes pas autorisé à rentrer";

    // En if ternaire à l'intérieur du alert !... Attention à la lisibilité quand même...
    // alert((agePrompt >= 18) ? "Bienvenue au nouveau" : "Vous n'êtes pas autorisé à rentrer");
    // En if ternaire pour insérer le message dans une variable, on alert le message dans un second temps
    // let message = (agePrompt >= 18) ? "Bienvenue au nouveau" : "Vous n'êtes pas autorisé à rentrer";
    // alert(message);

    // EXERCICE 3 : Faire une vérification de mot de passe 
    // Vous créez un mot de passe 
    // Vous demandez à l'utilisateur le mot de passe
    // Vous vérifiez qu'il corresponde au mot de passe enregistré
    // S'il est correct : message de bienvenue
    // Sinon : lui dire que le password n'est pas bon 
    let password = "pouet";
    let mdp = prompt("Saisissez votre mot de passe");
    if (password == mdp) alert("Bienvenue");
    else alert("Resaissez le mot de passe");

    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // ---------- CHAPITRE 8 : Structure itérative : Boucles -------------------
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    let elementChapitre8 = document.getElementById("contenuChapitre8");

    // Une boucle permet de répéter un ensemble d'instructions selon une condition d'entrée 
    // 3 informations nécessaires : 
    // 1 - Valeur de départ (notre compteur)
    // 2 - Condition d'entrée (basée sur notre compteur - ou pas)
    // 3 - Incrémentation ou décrémentation du compteur (pour ne pas avoir une boucle infinie)

    // Boucle while() {}
    let compteur = 0; // valeur de départ 

    // condition d'entrée on va dire, que l'on veut faire 10 tours de boucle, donc une condition compteur < 10

    while (compteur < 10) {
        elementChapitre8.innerHTML += compteur;
        compteur++; // mon incrémentation, cela équivaut à dire compteur = compteur +1 
    }

    // Exercice : Refaire la boucle afin d'avoir un chiffre par ligne 
    // à la base j'ai 0123456789
    // maintenant je veux : 
    // 0 
    // 1 
    // 2 
    // 3 
    // 4  ...

    compteur = 0;
    while (compteur < 10) {
        elementChapitre8.innerHTML += "<br>" + compteur;
        compteur++; // mon incrémentation, cela équivaut à dire compteur = compteur +1 
    }

    // On utilise souvent la boucle while avec des conditions d'entrée non numérique, plutôt dans le sens 
    // "tant que la condition est vraie, on poursuit, si on tombe sur "false", alors la boucle s'arrête"
    elementChapitre8.innerHTML += "<hr>";


    // Boucle for() {}
    // for(compteur; condition; incrementation) {}
    for (let i = 0; i < 10; i++) {
        elementChapitre8.innerHTML += i;
    }

    // EXERCICE 1 
    // Faire une boucle qui affiche de 0 à 99 avec le chiffre 50 en rouge 

    // EXERCICE 2 
    // Afficher la chaine de caractère suivante à l'aide d'une boucle
    // 0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9

    // EXERCICE 3 
    // Afficher des nombres allant de 2000 à 1930

    // EXERCICE 4 
    // Afficher le titre suivant : "<h2>Je m'affiche pour la Nème fois</h2>";
    // 10 tour de boucles, on remplace N par la valeur de la boucle, et on veut gérer l'affichage de 1ère qui est une exception comparé aux autres 2ème 3ème

    // EXERCICE 5
    // Déclarez une variable sum avec la valeur 0
    // Utilisez une boucle for pour parcourir les entiers de 1 à 10 
    // Chaque tour de boucle, ajoutez l'entier courant à la variable sum 
    // A la fin de la boucle, affichez la valeur de sum qui doit contenir l'addition de chaque chiffre de 1 à 10 

    // EXERCICE 6 
    // Affichez dans un tableau html avec un chiffre dans chaque cellule allant de 0 à 9 

    // EXERCICE 7
    // Refaire l'exercice du password du chapitre if, mais permettre à l'utilisateur de continuer à tenter de saisir le password, tant qu'il n'est pas bon
    // On sortira de la boucle uniquement lorsque le password est le bon ! 

    // EXERCICE 8 
    // Faire choisir un nombre entre 1 et 50 à l'utilisateur 
    // Demandez ensuite à l'utilisateur un nombre et l'informer si le nombre recherché est plus grand ou plus petit 
    // Le jeu ne s'arrète qu'une fois le nombre trouvé en affichant un message "Vous avez trouvé le nombre"
    // Deuxième version, avec un chiffre aléatoire (non saisi par l'utilisateur)

















});
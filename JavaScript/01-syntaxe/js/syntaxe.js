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
    // let password = "pouet";
    // let mdp = prompt("Saisissez votre mot de passe");
    // if (password == mdp) alert("Bienvenue");
    // else alert("Resaissez le mot de passe");

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
    // La boucle for est très spécifique aux compteurs numériques, elle ne peut pas fonctionner differemment !
    // Son avantage ? Impossible de se tromper dans la syntaxe car elle inclue automatiquement la déclaration du compteur, la condition et l'incrémentation 
    for (let i = 0; i < 10; i++) {
        elementChapitre8.innerHTML += i;
    }
    elementChapitre8.innerHTML += "<hr>";

    // EXERCICE 1 
    // Faire une boucle qui affiche de 0 à 99 avec le chiffre 50 en rouge 
    for (let i = 0; i < 100; i++) {
        if (i == 50) {
            elementChapitre8.innerHTML += "<span style='color:red;'>" + i + " </span>";
        } else {
            elementChapitre8.innerHTML += i + " ";
        }
    }
    elementChapitre8.innerHTML += "<hr>";

    // EXERCICE 2 
    // Afficher la chaine de caractère suivante à l'aide d'une boucle
    // 0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9
    for (let i = 0; i < 10; i++) {
        if (i === 0) {
            elementChapitre8.innerHTML += i;
        } else {
            elementChapitre8.innerHTML += " - " + i;
        }
    }
    elementChapitre8.innerHTML += "<hr>";



    // EXERCICE 3 
    // Afficher des nombres allant de 2000 à 1930
    for (let i = 2000; i >= 1930; i--) {
        elementChapitre8.innerHTML += i + " ";
    }
    elementChapitre8.innerHTML += "<hr>";


    // EXERCICE 4 
    // Afficher le titre suivant : "<h2>Je m'affiche pour la Nème fois</h2>";
    // 10 tour de boucles, on remplace N par la valeur de la boucle, et on veut gérer l'affichage de 1ère qui est une exception comparé aux autres 2ème 3ème
    for (let i = 1; i < 11; i++) {
        if (i == 1) {
            elementChapitre8.innerHTML += `<h2>Je m'affiche pour la ${i}ère fois</h2>`;
        } else {
            elementChapitre8.innerHTML += `<h2>Je m'affiche pour la ${i}ème fois</h2>`;
        }
    }

    elementChapitre8.innerHTML += "<hr>";

    for (let i = 1; i < 11; i++) {
        elementChapitre8.innerHTML += (i == 1) ? `<h2>Je m'affiche pour la ${i}ère fois</h2>` : `<h2>Je m'affiche pour la ${i}ème fois</h2>`;
    }

    elementChapitre8.innerHTML += "<hr>";

    for (let i = 1; i < 11; i++) {
        let suffixe = (i == 1) ? "ère" : "ème";
        elementChapitre8.innerHTML += `<h2>Je m'affiche pour la ${i}${suffixe} fois</h2>`;
    }



    // EXERCICE 5
    // Déclarez une variable sum avec la valeur 0
    // Utilisez une boucle for pour parcourir les entiers de 1 à 10 
    // Chaque tour de boucle, ajoutez l'entier courant à la variable sum 
    // A la fin de la boucle, affichez la valeur de sum qui doit contenir l'addition de chaque chiffre de 1 à 10 
    let sum = 0; // Je suis obligé de déclarer sum à l'extérieur de la boucle, sinon cette variable n'existera que dans l'espace local de ma boucle for, et pas à l'extérieur
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    console.log(sum);

    // EXERCICE 6 
    // Affichez dans un tableau html avec un chiffre dans chaque cellule allant de 0 à 9 
    // Ici javascript n'est pas capable de s'en sortir si je lui innerHTML des morceaux de tableaux un par un 
    // Pour résoudre cet exercice il va falloir que je "modèle" mon tableau dans une variable pour ensuite innerHTML cette variable
    let tableau = "";
    tableau += "<table border='1' style='width: 50%; margin: 0 auto; border-collapse: collapse; text-align: center;'>";
    tableau += "<tr>";

    for (let i = 0; i < 10; i++) {
        tableau += `<td>${i}</td>`;
    }

    tableau += "</tr>";
    tableau += "</table>";
    console.log(tableau);
    elementChapitre8.innerHTML += tableau;
    // EXERCICE 7
    // Refaire l'exercice du password du chapitre if, mais permettre à l'utilisateur de continuer à tenter de saisir le password, tant qu'il n'est pas bon
    // On sortira de la boucle uniquement lorsque le password est le bon ! 
    let passwordCorrect = "hajar1998";
    let mdp = "";

    // while (passwordCorrect != mdp) {
    //     mdp = prompt("Veuillez entrer votre mot de passe");
    //     if (mdp != passwordCorrect) {
    //         alert("Mot de passe incorrect ressayez");
    //     } else {
    //         alert ("Mot de passe correct, accès autorisé");
    //     }
    // }

    // EXERCICE 8 
    // Faire choisir un nombre entre 1 et 50 à l'utilisateur 
    // Demandez ensuite à l'utilisateur un nombre et l'informer si le nombre recherché est plus grand ou plus petit 
    // Le jeu ne s'arrète qu'une fois le nombre trouvé en affichant un message "Vous avez trouvé le nombre"
    // Deuxième version, avec un chiffre aléatoire (non saisi par l'utilisateur)
    // Le chiffre aléatoire va se gérer avec l'objet/l'outil s'appelant Math  on va utiliser sa méthode Math.random et comme c'est un float qu'il va nous générer, on va aussi faire un arrondi 
    // let nbrChoisi = prompt("Choisissez un nombre entre 1 et 50");
    // let nbrSecret = 26;
    // let nbrSecret = Math.floor(Math.random()*49+1);
    // console.log("Resultat du random : " + nbrSecret);

    // while (nbrSecret != nbrChoisi) {
    //     if (nbrChoisi < nbrSecret) {
    //         alert("Votre nombre est plus petit !");
    //     } else if (nbrChoisi > nbrSecret) {
    //         alert("Votre nombre est plus grand !");
    //     } 
    //     nbrChoisi = prompt("Ressayez un nombre entre 1 et 50");
    // }

    // if (nbrChoisi == nbrSecret) {
    //     alert("Felicitations vous avez trouvé !");
    // }

    // console.log(nbrSecret);


    // Maintenant avec la possibilité de tester le chiffre seulement 3 fois 
    // let nbrChoisi = prompt("Choisissez un nombre entre 1 et 50");
    // // let nbrSecret = 26;
    // let nbrSecret = Math.floor(Math.random() * 49 + 1);
    // console.log("Resultat du random : " + nbrSecret);
    // let essai = 0; // On va compter le nombre d'essai pour le jeu, afin de limiter à une certaine valeur

    // while (nbrSecret != nbrChoisi) {
    //     console.log("Essai numero : " + essai);
    //     essai++;
    //     if (nbrChoisi < nbrSecret) {
    //         alert("Votre nombre est plus petit !");
    //     } else if (nbrChoisi > nbrSecret) {
    //         alert("Votre nombre est plus grand !");
    //     }

    // if(essai == 1) {
    //     alert ("C'est votre premier essai, si on tombe ici on ne va pas prompt");
    //     continue; // L'instruction continue met fin au tour de boucle en cours, mais la boucle continue de s'exécuter avec un nouveau tour 
    // }


    // Si l'utilisateur a fait 3 essai, alors c'est terminé il a perdu ! 
    //     if (essai >= 3) {
    //         alert("Perdu !");
    //         break; // L'instruction break me permet de mettre fin à l'exécution de la boucle
    //     }
    //     nbrChoisi = prompt("Ressayez un nombre entre 1 et 50");
    // }

    // if (nbrChoisi == nbrSecret) {
    //     alert("Felicitations vous avez trouvé !");
    // }

    // Boucle do{} while()
    // La boucle do while contrairement à while qui teste la condition d'entrée en debut de boucle
    // do while va tester la condition à la fin de la boucle ! C'est à dire que même si la condition n'est pas rencontrée, elle fera malgré tout un premier tour quoi qu'il arrive ! 
    elementChapitre8.innerHTML += "<hr>";

    let i = 5;
    do {
        elementChapitre8.innerHTML += "<br>La boucle do while est en train de s'exécuter, valeur de i :" + i;
    } while (i > 10);


    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // ---------- CHAPITRE 9 : Fonctions prédéfinies / globales ----------------
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    // Les fonctions globales en JS sont des fonctions déjà inscrites dans le langage
    // On entend être une fonction globale, une fonction qui est disponible à tout moment dans le code
    // En JS, on utilise essentiellement des "fonctions" qui sont rattachées à des "outils" par exemple ci dessus on a utilisé la fonction random de l'outil Math, la fonction round de l'outil Math
    // C'est ce qu'on appelle des méthodes

    // Les fonctions réellement globales, il y en a peu ! 

    /* 
        eval()
        uneval()
        isFinite()
        isNaN()
        parseFloat()
        parseInt()
        encodeURI()
        encodeURIComponent()
        decodeURI()
        decodeURIComponent()
    */

    // ---------------------------------------------------------
    // ----------------------- parseInt(chaine, base)
    // ---------------------------------------------------------
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    // On attend en argument/paramètre : 
    // une chaine de caractère 
    // une base : base arithmétique (base 10 pour la base décimale = on parle uniquement de manipulation de chiffres de 0 à 9)
    // En gros, on va transformer une chaine de caractères qui contient uniquement des chiffres, en vrai type number ! Pour éviter les ambiguités et les dysfonctionnements de notre code d'un point de vue d'opération mathématique ou autre (comparaison de longueur etc)
    let elementChapitre9 = document.getElementById("contenuChapitre9");
    chaine = "123";
    elementChapitre9.innerHTML += "La chaine 123 contenu dans la var chaine est de type : " + typeof chaine + "<hr>";
    chaine = parseInt(chaine, 10);
    console.log(chaine);
    elementChapitre9.innerHTML += "APRES UN PARSE INT : La chaine 123 contenu dans la var chaine est de type : " + typeof chaine + "<hr>";

    // La ligne ci dessous sans faire parseInt, il pense que je suis en train de faire une concaténation
    elementChapitre9.innerHTML += "Addition de 1 + 1 un type de number et un type string : " + ("1" + 1) + "<br>";

    // Par contre, si j'englobe ça dans un parseInt 
    elementChapitre9.innerHTML += "Addition de 1 + 1 un type de number et un type string mais avec parseInt : " + (parseInt("1", 10) + 1) + "<br>";

    // ---------------------------------------------------------
    // ----------------------- parseFloat(chaine)
    // ---------------------------------------------------------
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
    elementChapitre9.innerHTML += typeof "14.9" + "<br>";
    elementChapitre9.innerHTML += typeof parseFloat("14.9") + "<br>";
    console.log(parseFloat("14.9")); // Ici on reçoit bien un number 14.9
    console.log(parseFloat("14,9")); // Ici par contre attention on reçoit seulement 14 !!! Car la virgule n'est pas comprise comme étant la virgule décimale que nous comprennons en français, il faudra bien utiliser le point du pavé numérique ! 


    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // ---------- CHAPITRE 10 : Fonctions utilisateurs -------------------------
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    // Avoir un code DRY (Dont Repeat Yourself) en programmation est toujours important ! 
    // Plutôt que d'avoir à plusieurs endroit du code, un traitement identique pour un contexte particulier
    // Je vais préférer, englober le code en question, dans une fonction ! 
    // Cela me permettra de le réutiliser pour plus tard ! 

    let elementChapitre10 = document.getElementById('contenuChapitre10');

    // Déclaration d'une fonction : 
    // Une fonction a toujours un nom et des parenthèses qui contiennent des paramètres (ou pas)
    function maFonction() { // Ici façon de déclarer que l'on appelle function statement
        // Il faut TOUJOURS un return dans une fonction
        // C'est ce qui permet de nous dire ce que retourne exactement notre fonction
        // Ici maFonction() retourne la chaine de caractères "Bonjour à tous <br>"
        return "Bonjour à tous<br>";
    }

    // Ici l'exécution de ma fonction
    elementChapitre10.innerHTML += maFonction();

    // Je peux éxecuter une fonction à tout moment de mon code
    // Par contre, c'est à moi de dire ce que je fais du return de cette fonction ! 
    // La ci dessous, j'aurai un appel de maFonction() sans en traiter le return
    // Ni d'affichage via le innerHTML, ni l'insertion dans une variable, l'exécution ne produit rien ! 
    maFonction();

    // Ci dessous la façon de déclarer une fonction : function operator
    // Il est possible de définir une fonction dans une variable, cela ne change pas sa syntaxe d'exécution
    // Cela permet parfois de récupérer des ressources sur une allocation de mémoire gérée localement plutôt que globalement
    let maFonction2 = function () {
        return "Hello world ! <br>";
    }

    elementChapitre10.innerHTML += maFonction2();

    // Fonction avec un argument : 

    // Ici je défini que ma fonction direBonjour attend une information
    // On va appeler ça un paramètre/param/argument
    // En gros, c'est une variable qui va réceptionner, la valeur que l'on transmet à l'appel de cette fonction
    // Lorsque je vais faire direBonjour("Pierre"), la valeur Pierre va être récupérée dans la variable de réception "qui"
    // Le fait que "qui" existe et récupère une valeur, me permet de la manipuler dans le code de ma fonction 
    function direBonjour(qui) {
        return "Bonjour " + qui + ", bienvenue sur notre site<hr>";
    }

    // pseudo = prompt("Quel est votre nom ?");
    // elementChapitre10.innerHTML += direBonjour(pseudo);
    // Ci dessous je transmet à l'appel de ma fonction, la valeur "Alexandre", ce qui permet à la fonction de s'exécuter en comprennant qu'elle doit dire bonjour à "Alexandre"
    elementChapitre10.innerHTML += direBonjour("Alexandre");

    // On peut mettre plusieurs paramètres
    function addition(nb1, nb2) {
        return `Voici l'addition entre ${nb1} et ${nb2} : ` + (nb1 + nb2) + `<br>`;
    }

    elementChapitre10.innerHTML += addition(10, 5);
    elementChapitre10.innerHTML += addition(101, 55);
    elementChapitre10.innerHTML += addition(101, 556);


    // La fonction ci dessous va m'éviter de à chaque fois faire appeler au innerHTML d'un élément et d'y rajouter qqchoz avec le +=, la fonction va le gérer solo ! Elle attend en premier param la chaine que l'on va rajouter et en deuxieme param dans quel element on va rajouter ! 
    // Pas de return ici ! Ce sera une exception parmis nos fonctions, car elle lance déjà directement son comportement, à savoir l'affichage dans le innerHTML de l'élément sélectionné 
    function affiche(chaine, element) {
        element.innerHTML += chaine + "<br>";
    }

    affiche("COUCOU", elementChapitre10);


    // Fonction pour calculer un prix TTC (donc avec TVA ajoutée)
    function calculTVA(prix) {
        return prix * 1.2;
    }

    affiche(calculTVA(100), elementChapitre10);
    affiche(calculTVA(500), elementChapitre10);

    // EXERCICE, réutiliser la fonction calculTVA mais permettre à l'utilisateur de choisir le taux de TVA à appliquer (par défaut au dessus c'est 20, mais on veut pouvoir choisir d'autres valeurs)
    // Bonus : Une fois fait, faire en sorte que le choix du taux soit facultatif, en gros, que si le taux n'est pas renseigné, que l'on utilise le taux de base de 20%
    // let taux = "";

    // Ci dessous une première version qui induit forcément un prompt dans la fonction
    // function calculTVATaux(prix) {
    //     let taux = prompt("Quel est le taux de taxe à appliquer");
    //     return prix + (prix * (taux / 100));
    // }

    // affiche(calculTVATaux(100), elementChapitre10);

    // Autre façon, on préfèrera plutôt gérer deux params dans la fonction histoire de rester générique !
    // Le but de la fonction est de calculer uniquement le prix TTC, sans se soucier de devoir gérer aussi la saisie

    function calculTVATaux2(prix, taux = 20) {
        // console.log(taux);
        return parseFloat(prix) + (parseFloat(prix) * (parseFloat(taux) / 100));
    }

    affiche(calculTVATaux2(100, 35), elementChapitre10);
    affiche(calculTVATaux2(100), elementChapitre10);
    elementChapitre8.innerHTML += "<hr>";

    // let prixUser = prompt("Saisissez un prix HT");

    // let confirmTaux = confirm("Voulez vous saisir un taux différent de 20% ?");

    // if (confirmTaux) {
    //     let tauxUser = prompt("Saisissez le taux sous forme d'entier");
    //     affiche(calculTVATaux2(prixUser, tauxUser), elementChapitre10);
    // } else {
    //     affiche(calculTVATaux2(prixUser), elementChapitre10);
    // }


    // Selon l'endroit où est déclarée une variable ainsi que le mot clé utilisé pour définir la variable (var, let, const) celle ci pourra être accessible dans tout le script ou uniquement dans une portion du script
    // On parle ici de portée, la portée d'une variable

    // Il existe plusieurs portée de variable à savoir la portée : 
    // Globale : On considère global l'entièreté du code, partout en dehors des blocs 
    // Locale : On considère local l'intérieur des blocs (les blocs sont toujours des accolades, par exemple l'intérieur d'une fonction, d'une boucle, d'un if)

    // Une variable déclarée dans un espace local n'exisste pas en dehors de cette espace ! (sauf dans le cas de var)

    // On parle de portée, mais aussi d'environnement ou de scope 

    let animal = "loup"; // Variable déclarée dans le scope global

    function foret() {
        let animal = "lapin"; // Variable déclarée dans le scope local 
        return animal;
    }

    affiche(animal + "<hr>", elementChapitre10); // Affiche loup
    foret(); // rien ne se passe, un simple return dans le vide que je ne traite pas 
    affiche(animal + "<hr>", elementChapitre10); // Affiche loup
    affiche(foret() + "<hr>", elementChapitre10); // Affiche lapin
    affiche(animal + "<hr>", elementChapitre10); // Affiche loup
    animal = foret(); // Uniquement ici j'aurai un changement de valeur de ma variable animal
    affiche(animal + "<hr>", elementChapitre10); // Affiche lapin

    affiche("<b>Les Immediately Invoked Functions Expressions IIFE</b><br>", elementChapitre10);

    // En JS il y a une spécificité que l'on utilise régulièrement, c'est la possibilité de créer des fonctions anonymes (c'est à dire, on ne les nomme pas) et de les exécuter immédiatement sans passer par l'étape de la déclaration

    // Les IIFE sont des fonctions qui sont immédiatmeent exécutées après avoir été définies. Elles sont généralement utilisées dans JS pour créer un scope isolé dans lequel des variables peuvent être déclarées sans polluer le scope global

    // Les concepts et l'intérêt des IIFE : 

        // Encapsulation : Les IIFE permettent d'encapsuler du code dans une portée locale, empéchant ainsi les collisions/conflits de onms de variables ou de fonctions avec d'autres parties du code 

        // Protection de la portée globale : En encapsulant du code dans une IIFE, on évite de polluer la portée globale avec des variables dont on a besoin peut être que pendant un simple instant 

        // Prévention des conflits : En enveloppant le code dans une IIFE, vous évitez les conflits potentiels avec d'autres bibliothèques ou frameworks qui pourraient utiliser des noms de variables ou de fonctions similaires 

        // Isolation du code : Les IIFE permettent d'isoler le code, ce qui peut rendre le code plus lisible et facile à maintenir à la longue 


        // deux syntaxes différentes ici, la différence se situe dans la position des parenthèses
        // Après une fonction on a toujours des parenthèses fucntion()  qui définissent que l'élément est une fonction déclarée
        // Ici, pas seulement déclarée, mais aussi immédiatement exécutée ! 
        // On utilise la plupart du temps ces fonctions anonyme au travers des évènements
            // Un évènement lancera une portion de code, cette portion de code sera englobée dans une fonction anonyme
        (function() {
            return affiche("Cette fonction est exécutée automatiquement", elementChapitre10);
        }());

        (function() {
            return affiche("Cette fonction est exécutée automatiquement", elementChapitre10);
        })();

        





















});
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
// ---------- CHAPITRE 1 : AFFICHAGE ---------------------------------------
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
let A=0;
let B=0;
let C=0;
let D=0;

A=3.5;
B=1.5;
C=A+B;
B=A+C;
A=B;


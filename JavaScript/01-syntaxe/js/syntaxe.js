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
let A=0;
let B=0;
let C=0;
let D=0;

A=3.5;
B=1.5;
C=A+B;
B=A+C;
A=B;

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

maBoite = "10";
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








});
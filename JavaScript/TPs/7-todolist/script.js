// Le but ici étant de créer une todolist

// C'est à dire, j'ai un input, dans lequel je peux saisir des tasks pour ma journée 

// Par exemple : 
        // - Faire le ménage 
        // - Ranger le placard 
        // - Boire un café 
        // etc. 

// A chaque fois que je valide une task adns cet input, la task est rajoutée à une liste 

// Je peux ensuite cocher/cliquer les éléments de cette liste pour les considérer terminé ! (changement de style)

const input = document.querySelector('#taskInput');
const btn = document.querySelector('#addBtn');
const list = document.querySelector('#taskList');

btn.addEventListener('click', function() {
    const taskText = input.value;

    if (taskText !== "") {
        // 1. Création de l'élément li
        const li = document.createElement('li');
        li.className = "list-group-item list-group-item-action"; // On ajoute 'action' pour le curseur main
        li.innerText = taskText;
        li.style.cursor = "pointer"; // Pour bien montrer qu'on peut cliquer

        // 2. Événement au clic sur le LI pour rayer
        li.addEventListener('click', function() {
            // On ajoute ou retire la classe "fait" et la classe Bootstrap de rayure
            li.classList.toggle('fait');
            li.classList.toggle('text-decoration-line-through');
        });

        // 3. Ajouter à la liste et vider l'input
        list.appendChild(li);
        input.value = "";
    }
});
// mettre un evenement submit sur le formulaire et le bloquer.
document.getElementById("formInscription").addEventListener('submit', function(evenement)  {
    evenement.preventDefault();

    // exemple message d'erreur
    // <div class="alert alert-danger mt-2">...message...</div>


    // Vérifier la taille du pseudo, le pseudo doit faire entre 5 et 15 caractères (pas d'espace accepté) inclus sinon => un message d'erreur
    var pseudoValue = document.getElementById('pseudo').value.trim();
    console.log(pseudoValue);
    var pseudoMessage = document.getElementById('messagePseudo');
    if(pseudoValue.length < 5 || pseudoValue.length > 15) {
        pseudoMessage.innerHTML = '<div class="alert alert-danger mt-2">Erreur sur le pseudo, le pseudo doit avoir entre 8 et 14 caractères inclus</div>';
    } else {
        pseudoMessage.innerHTML = '';
    }

    // Vérifier si le mdp et le confirm_mdp ne sont pas vide (pas d'espace accepté) sinon => message d'erreur
    // Vérifier si le mdp et le confirm_mdp sont similaires sinon => message d'erreur
    var mdpValue = document.getElementById('mdp').value.trim();
    var confirmMdpValue = document.getElementById('confirm_mdp').value.trim();
    var mdpMessage = document.getElementById('messageMdp');
    var confirmMdpMessage = document.getElementById('messageConfirmMdp');

    if(mdpValue.length > 0 && confirmMdpValue.length > 0) {
        if(mdpValue == confirmMdpValue) {
            mdpMessage.innerHTML = '';
            confirmMdpMessage.innerHTML = '';
        } else {
            mdpMessage.innerHTML = '<div class="alert alert-danger mt-2">Erreur, les champs mot de passe et confirmation du mot de passe ne sont pas identiques</div>';
            confirmMdpMessage.innerHTML = '<div class="alert alert-danger mt-2">Erreur, les champs mot de passe et confirmation du mot de passe ne sont pas identiques</div>';
        }
    } else {
        mdpMessage.innerHTML = '<div class="alert alert-danger mt-2">Les champs mot de passe et confirmation du mot de passe sont obligatoires</div>';
        confirmMdpMessage.innerHTML = '<div class="alert alert-danger mt-2">Les champs mot de passe et confirmation du mot de passe sont obligatoires</div>';
    }

    var nomValue = document.getElementById('nom').value.trim();
    var prenomValue = document.getElementById('prenom').value.trim();
    var emailValue = document.getElementById('email').value.trim();
    var adresseValue = document.getElementById('adresse').value.trim();
    var villeValue = document.getElementById('ville').value.trim();

    var nomMessage = document.getElementById('messageNom');
    var prenomMessage = document.getElementById('messagePrenom');
    var emailMessage = document.getElementById('messageEmail');
    var adresseMessage = document.getElementById('messageAdresse');
    var villeMessage = document.getElementById('messageVille');

    if(nomValue.length < 1) {
        nomMessage.innerHTML = '<div class="alert alert-danger mt-2">Le nom est obligatoire</div>';
    } else {
        nomMessage.innerHTML = '';
    }

    if(prenomValue.length < 1) {
        prenomMessage.innerHTML = '<div class="alert alert-danger mt-2">Le prénom est obligatoire</div>';
    } else {
        prenomMessage.innerHTML = '';
    }

    if(emailValue.length < 1) {
        emailMessage.innerHTML = '<div class="alert alert-danger mt-2">L\'email est obligatoire</div>';
    } else {
        emailMessage.innerHTML = '';
    }

    if(adresseValue.length < 1) {
        adresseMessage.innerHTML = '<div class="alert alert-danger mt-2">L\'adresse est obligatoire</div>';
    } else {
        adresseMessage.innerHTML = '';
    }

    if(villeValue.length < 1) {
        villeMessage.innerHTML = '<div class="alert alert-danger mt-2">La ville est obligatoire</div>';
    } else {
        villeMessage.innerHTML = '';
    }

    // Exercice : vérifier la validité du code postal => 5 caractères et de type numérique
    var cpValue = document.getElementById('cp').value.trim();
    var cpMessage = document.getElementById('messageCp');

    if(cpValue.length != 5 || isNaN(cpValue)) {
        cpMessage.innerHTML = '<div class="alert alert-danger mt-2">Le code postal doit avoir 5 caractères de type numérique</div>';
    } else {
        cpMessage.innerHTML = '';
    }

    var telephoneValue = document.getElementById('telephone').value.trim();
    var telephoneMessage = document.getElementById('messageTelephone');

    if(telephoneValue.length != 10 || isNaN(telephoneValue)) {
        telephoneMessage.innerHTML = '<div class="alert alert-danger mt-2">Le format du téléphone est incorrect !</div>';
    } else {
        telephoneMessage.innerHTML = '';
    }

});

// le même controle que lors de la validation du formulaire mais lors du blur sur un champ (pseudo), ou avec un keydown pour le check en direct
document.getElementById('pseudo').addEventListener('keydown', function () {
    var pseudoValue = this.value.trim();
    var pseudoMessage = document.getElementById('messagePseudo');
    if(pseudoValue.length < 8 || pseudoValue.length > 14) {
        pseudoMessage.innerHTML = '<div class="alert alert-danger mt-2">Erreur sur le pseudo, le pseudo doit avoir entre 8 et 14 caractères inclus</div>';
    } else {
        pseudoMessage.innerHTML = '';
    }
});

// <i class="fas fa-eye"></i>
// afficher le mot de passe ou le cacher et changer l'icone correspondant
document.getElementById('afficheMdp').addEventListener('click', function () {
    var champMdp = document.getElementById('mdp');

    console.log(champMdp.getAttribute('type'));

    if(champMdp.getAttribute('type') == 'password') {
        champMdp.setAttribute('type', 'text');
        this.setAttribute('class', 'fas fa-eye text-primary');
    } else {
        champMdp.setAttribute('type', 'password');
        this.setAttribute('class', 'fas fa-eye-slash text-primary')
    }
});

document.getElementById('afficheConfirmMdp').addEventListener('click', function () {
    var champConfirmMdp = document.getElementById('confirm_mdp');

    console.log(champConfirmMdp.getAttribute('type'));

    if(champConfirmMdp.getAttribute('type') == 'password') {
        champConfirmMdp.setAttribute('type', 'text');
        this.setAttribute('class', 'fas fa-eye text-primary');
    } else {
        champConfirmMdp.setAttribute('type', 'password');
        this.setAttribute('class', 'fas fa-eye-slash text-primary')
    }
});

// ville automatique selon la valeur du cp
document.getElementById('cp').addEventListener('blur', function () {
    var cpVal = this.value.trim();

    document.getElementById('ville').value = '';

    var departement = cpVal.substring(0, 2);
    console.log(departement);
    if(departement == '75') {
        document.getElementById('ville').value = 'Paris';
    } else if(cpVal == '34000') {
        document.getElementById('ville').value = 'Montpellier';
    } else if(cpVal == '94700') {
        document.getElementById('ville').value = 'Maisons-Alfort';
    } else if(cpVal == '69001') {
        document.getElementById('ville').value = 'Lyon';
    } else if(cpVal == '90000') {
        document.getElementById('ville').value = 'Belfort';
    }
 
});
/**
 * Ici j'ai juste supose que ce sont les actions a menner ne vous
 * concentrez pas ici mais plutos sur les fonctions des exos
 * 
 * Au cas ou tu es tetu et tu veut quand meme comprendre ca...
 * 1. on commence par ecouter l'evennement de soumition du formulaire
 * 2. lors qu'il a lieu on bloque son comportement par defaut (la redirection)
 * avec la fontion `event.preventDefault()`
 * 3. puis on verifie si le formulaire est valide (FormValidation retourn vrai)
 *      - si oui --> on ajoute la tache a la tete de la liste
 *      - si non --> on alert l'utilisateur
 * 
 * NB:
 * pour la verification du formulair on utilise un `inline condiction` la
 * syntaxe est la suivante
 * 
 *  << teste logique ou condition ? action si vrai : action si faux >>
 */
const todoForm = document.querySelector('form')
todoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    FormValidation() == true ? AddTask() : alert('form invalid')
})


/**
 * EXO 1.
 * 
 * il est question ici de valide les champs du 
 * formulaire donc on procede en quelques etapes tres
 * simples
 */
function FormValidation() {
    // tous d'abord on recupere les valeurs des champs
    const taskName = document.getElementById('task-name')
    const desciption = document.querySelector('textarea')

    // en suite on fait une brance qui reproduit les conditions
    // de l'exo
    if (taskName.value == '' || desciption.value == '') {
        // si l'un des deux est vide on renvoit faux
        return false
    } else {
        // dans le cas contraire (les deux ont une valeur) on renvoie vrai
        return true
    }
}

/**
 * EXO 2.
 * 
 * Il est question pour nous ici de creer un element card
 * avec les valeurs des champs du formulaire apres validation
 * on peu faire ca simplement comme suit
 */
function AddTask() {
    // on commence par recuperer ces champs
    const taskName = document.getElementById('task-name')
    const desciption = document.querySelector('textarea')

    // on recupere egalement la liste des taches
    const taskList = document.querySelector('.taskList')

    // puis on craie l'element card qui contient toute la tache
    const card = document.createElement('div')
    card.classList.add('card') // on luis ajoute la classe .card

    /**
     * 
     * on enrichie ensuite le card avec son contenu html
     * ce que je fait ci dessou c'est un moyen tres sucre de faire
     * le TAF sans pour autant me compliquer la tete a creer encore plus
     * d'element
     * 
     * on appelle ca string formating. J'utilise des giemmets speciaux (``)
     * qui me permettent d'ecrire du HTML comme si c'etais une chainne de 
     * caractere, mais cette chaine de caractere cera interprete comme du
     * HTML par le navigateur
     * 
     * Aussi a l'interieur de ces giemmets, je peu ajouter une variable
     * tous simplement en l'enrobant dans un << ${ } >> c'est ainsi que
     * je placce le contenu de taskName et description la ou il doivent etre
     */
    
    card.innerHTML = `
    <button class="delete-task" onClick=DelTask(event)>&cross;</button>
    <div class="title-section">
        <div class="title">task name:</div>
        <p>${taskName.value}</p>
    </div>
    <div class="description-section">
        <div class="title">decription:</div>
        <p>${desciption.value}</p>
    </div>
    `

    // enfin on ajoute le card a la tete de la list
    taskList.insertBefore(card, taskList.children[0])

    // enfin on peut netoyer le formulaire
    taskName.value = ''
    desciption.value = ''
}


/**
 * EXO 3.
 * 
 * Ici tous ce qu'on a afaire ces du suprimer
 * le card sur lequel le bouton delete a 
 * ete clique
 *  
 */
function DelTask(event) {
    // on commence par recuperer le parent (le card) de
    // la cible de l'evenement (delete-button)
    const card = event.target.parentElement

    // on recupere la liste des todo
    taskList = document.querySelector('.taskList')

    // puis on enleve le card cible de la list
    taskList.removeChild(card)
}
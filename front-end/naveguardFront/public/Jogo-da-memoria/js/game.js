const grid = document.querySelector('.grid')

//função para o nome do player e do timer
const spanPlayer = document.querySelector('.player');
//função para o tempo
const timer = document.querySelector('.timer');



let firstCard = '';
let secondCard = '';

const charaters = [
    "charizard", 
    "blastoise",
    "charizardPremium",
    "corphish",
    "machamp",
    "meowtwo",
    "mew",
    "ninetales",
    "Pikachu",
    "max",
];


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;

    return element
}

const checkEndGame = () => {
    const disableCards = document.querySelectorAll('.disable-card')

    if(disableCards.length === 20)  {
        clearInterval(this.loop)
        alert(`Parabéns ${spanPlayer.value}!\nSeu tempo foi: ${timer.innerHTML} segundos!`)
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disable-card')
        secondCard.firstChild.classList.add('disable-card')

        firstCard = '';
        secondCard = '';

        checkEndGame();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
        }, 500)
        
    }
    
}

//click na carta para revelar a imagem
const revealCard = ({ target }) => {

    if(target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if(firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if(secondCard === ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }

   
    target.parentNode.classList.add('reveal-card')
}


const createCard = (charater) => {
    //função que cria uma div e o nome da classe para não precisar repetir código createElement
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../images/${charater}.png')`;
    //inserindo tanto o front quanto o back na div card no mesmo modelo do html
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard)

    //adiciona atributo para comparar as cartas
    card.setAttribute('data-character', charater)
    return card;
}

const loadGame = () => {
    
    const duplicateCharacters = [ ...charaters, ...charaters ]


    //ordenação de lista - sort                         //embaralhou array
    const shuffledArray = duplicateCharacters.sort( () => Math.random() - 0.5 );

    shuffledArray.forEach((charater) => {
        
    const card = createCard(charater);
    grid.append(card);
    });
}

const startTimer = () => {
   
    this.loop = setInterval(() => {
        
        const currentTime = +timer.innerHTML ;
        timer.innerHTML = currentTime + 1;


    },1000);
}

//dado capturado
window.onload = () => {
    const playerName = localStorage.getItem('player')
    
    spanPlayer.innerHTML = playerName
    
    startTimer();
    loadGame();
}


const grid = document.querySelector('.grid')

// Função para o nome do player e do timer
const spanPlayer = document.querySelector('.player')
// Função para o tempo
const timer = document.querySelector('.timer')

let contador = 0;


let firstCard = ''
let secondCard = ''

const charaters = [
    "arraia", 
    "macaco",
    "nemo",
    "papagaio",
    "tubarao",
    "tartaruga",
]

// Música de fundo no escopo global
const backgroundMusic = new Audio('../audio/theme.mp3')
backgroundMusic.loop = true

// Música de final de jogo
const musicEnd = new Audio('../audio/audioCongratulations.mp3')

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className

    return element
}

const checkEndGame = () => {
    const disableCards = document.querySelectorAll('.disable-card');
    const playerName = localStorage.getItem('player');
    const parabenificacao = document.querySelector('#parabens');
    parabenificacao.innerHTML = `Parabéns ${playerName}!\nSeu tempo foi: ${timer.innerHTML} segundos!`;

    const congratulationsScreen = document.querySelector('.congratulations-screen');
    congratulationsScreen.style = `display:block; color: white;
    background-color: #0289d1fe;
    border-radius: 5px;
    width: 50%;
    height: 80%;
    box-shadow: #4fc3f7;
    position: absolute;
    display: flex;
    text-align: center;
    justify-content: center;
    margin: auto;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 30px;`;

}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';
        
        contador = contador + 1 
        if(contador == 6) {
            
            checkEndGame(); // Verifica o fim do jogo após o par ser encontrado
            timer.pause()
        } 
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            console.log(contador)
            firstCard = '';
            secondCard = '';
        }, 500);
    }
};


// Click na carta para revelar a imagem
const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode

        checkCards()
    }

    target.parentNode.classList.add('reveal-card')
}

const createCard = (charater) => {
    // Função que cria uma div e o nome da classe para não precisar repetir código createElement
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../images/${charater}.png')`
    // Inserindo tanto o front quanto o back na div card no mesmo modelo do HTML
    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)

    // Adiciona atributo para comparar as cartas
    card.setAttribute('data-character', charater)
    return card
}

const loadGame = () => {
    const duplicateCharacters = [...charaters, ...charaters]

    // Ordenação de lista - sort (embaralhou array)
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5)

    shuffledArray.forEach((charater) => {
        const card = createCard(charater)
        grid.append(card)
    })
}

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML
        timer.innerHTML = currentTime + 1
    }, 1000)
}

window.onload = () => {
    const playerName = localStorage.getItem('player')
    spanPlayer.innerHTML = playerName

    backgroundMusic.play()
    startTimer()
    loadGame()
}

const playAgain = () => {
    const playAgain = document.querySelector("#play-again")
    if(playAgain) {
        playAgain.addEventListener('click', () => {
            location.reload()
        })
    }
}

const stopGame = () => {
    const stop = document.querySelector("#back-beck")
    if(stop) {
        stop.addEventListener('click', ()=> {
            window.location.href = "/kids-page"
        })
    }
} 
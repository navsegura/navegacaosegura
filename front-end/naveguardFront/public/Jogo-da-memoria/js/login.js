const input = document.querySelector(".login_input")
const button = document.querySelector(".login_button")
const form = document.querySelector(".login-form")

function validarInput({ target }) {
    if(target.value.length > 2 ) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', "")
    }
}

function validarForm(evento) {
    evento.preventDefault()
    
    //vai salvar chave valor
    localStorage.setItem('player', input.value)
    console.log(localStorage)
    window.location = 'game.html'
    
    
    
}

input.addEventListener('input', validarInput)
form.addEventListener('submit', validarForm)
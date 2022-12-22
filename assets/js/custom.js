const submitButton = document.getElementById('botaoverde')
const firstName = document.getElementById('nome')
const lastName = document.getElementById('sobrenome')
const emailAddress = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => submit(e))

function submit(event) {
    if (checkEmpty([firstName, lastName, password])) {
        event.preventDefault()
    }
    if (checkEmpty([emailAddress]) || !isEmail(emailAddress)) {
        event.preventDefault()
        showErrorMessage(emailAddress, true)
    }
    else {
        showErrorMessage(emailAddress, false)
    }
}


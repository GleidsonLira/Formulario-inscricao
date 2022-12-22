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

function checkEmpty(inputs) {
    let foundError = false
    inputs.forEach(input => {
        if (input.value === "" || input.value === null) {
            showErrorMessage(input, true)
            foundError = true
        }
        else { showErrorMessage(input, false) }
    })
    return foundError
}

function showErrorMessage(input, show) {
    if (show) {
        input.parentElement.classList.add('error')
    }
    else { input.parentElement.classList.remove('error') }
}

function isEmail(email) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}
let nome = window.document.getElementById('nome')
let sobrenome = document.querySelector('#sobrenome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOk = false
let sobrenomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Digite mais de 3 caracteres.'
        txtNome.style.color = 'red'
        nomeOk = false
    } else {
        txtNome.innerHTML = ''
        nomeOk = true
    }
}

function validaSobrenome() {
    let txtSobrenome = document.querySelector('#txtSobrenome')
    if (sobrenome.value.length < 3) {
        txtSobrenome.innerHTML = 'Digite mais de 3 caracteres.'
        txtSobrenome.style.color = 'red'
        sobrenomeOk = false
    } else {
        txtSobrenome.innerHTML = ''
        sobrenomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == - 1 || email.value.indexOf('.') == - 1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    } else {
        txtEmail.innerHTML = ''
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length < 10) {
        txtAssunto.innerHTML = 'Digite mais de 10 caracteres.'
        txtAssunto.style.color = 'red'
        assuntoOk = false
    } else {
        txtAssunto.innerHTML = ''
        assuntoOk = true
    }
}

function enviar() {

    if (nomeOk == true && sobrenomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente.')
    }
}
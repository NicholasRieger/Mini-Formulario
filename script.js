const nome = document.querySelector('#nome')
const idade = document.querySelector('#idade')
const cidade = document.querySelector('#cidade')
const form = document.querySelector('form')
const card = document.querySelector('.card')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nomeValidado = nome.value.trim()
    const idadeValidada = Number(idade.value)
    const cidadeValidada = cidade.value.trim()

    if(nomeValidado.length > 2 && cidadeValidada.length > 2){
    card.textContent = `Olá, ${nomeValidado}, você tem ${idadeValidada} anos e mora em ${cidadeValidada}.`

    nome.value = ''
    idade.value = ''
    cidade.value = ''
    } else{
        card.textContent = 'Por favor, preencha os campos corretamente.'
    }
})
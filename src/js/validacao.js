const btnSubmit = document.querySelector("button.submit")
function verificar() {
    var inputNome = document.querySelector("input.nome")
    var inputCpfCnpj = document.querySelector("input.cpf")
    var inputCep = document.querySelector("input.cep")
    var inputQtdMeias = document.querySelector("input.qtd-meias")
    var inputModeloMeias = document.querySelector("input.modelo-meias")
    var enviar = true
    if (!(isNaN(inputNome.value)) || inputNome.value.length == 0) {
        document.getElementById("nome").style.color = 'red'
        inputNome.style.backgroundColor = "#7a2a2a"
        enviar = false
    }
    if (isNaN(inputCpfCnpj.value) || inputCpfCnpj.value == 0) {
        document.getElementById("cpf").style.color = 'red'
        inputCpfCnpj.style.backgroundColor = "#7a2a2a"
        enviar = false
    }
    if (isNaN(inputCep.value) || inputCep.value == 0) {
        document.getElementById("cep").style.color = 'red'
        inputCep.style.backgroundColor = "#7a2a2a"
        enviar = false
    }
    if (isNaN(inputQtdMeias.value) || inputQtdMeias.value == 0) {
        document.getElementById("qtd-meias").style.color = 'red'
        inputQtdMeias.style.backgroundColor = "#7a2a2a"
        enviar = false
    }

    if (!(isNaN(inputModeloMeias.value)) || inputModeloMeias.value == 0) {
        document.getElementById("modelo-meias").style.color = 'red'
        inputModeloMeias.style.backgroundColor = "#7a2a2a"
        enviar = false
    }

    if (enviar) {
        document.form1.submit()
    }
}
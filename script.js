
operacao = ''
function calcular(element){
    if(element == '='){
        let teste = eval(operacao)
        document.getElementById('value').value = teste
    }
    else{
        operacao += element
        document.getElementById('conta').value += element
    }
}
function limpar(){
    document.getElementById('value').value = ''
    document.getElementById('conta').value = ''
    operacao = ''
}

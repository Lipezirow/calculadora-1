//Inicializo variavel que armazena os inputs do usuario
operacao = ''

//Funcao que faz o calculo, recebendo element, que é o valor enviado pelo usuário
//No ato de pressionar o botão
function calcular(element){
    //Se element for igual a '='
    if(element == '='){
        /**
         * Se elemento for igual a =, significa que quero o resultado da conta
         * para obter o resultado da conta, mando a operacao para o console, 
         * eval recebendo, faz a conta e armazena na variavel teste
         */
        let teste = eval(operacao)

        //Por fim, o valor de value recebe teste
        document.getElementById('value').value = teste
    }
    //Se o botao pressionado for diferente de =
    else{
        //Operacao recebe element e concatena com o que tinha antes
        operacao += element
        document.getElementById('conta').value += element
    }

}


function limpar(){
    document.getElementById('value').value = ''
    document.getElementById('conta').value = ''
    operacao = ''
}

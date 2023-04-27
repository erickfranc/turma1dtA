function somar(){
    //Entradas
    var numero1 = parseInt(document.getElementById('num1').value)
    var numero2 = parseInt(document.getElementById('num2').value)

    //Processamento
    var soma = numero1 + numero2

    //Saída
    document.getElementById('resultado').innerHTML = ('A soma é '+ soma)
}
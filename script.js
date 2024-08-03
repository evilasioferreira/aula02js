
//Exercício 1
/*let num1 = parseFloat(prompt("Primeiro número: "))
let num2 = parseFloat(prompt("Segundo número: "))

if (num1 > 0 && num2 > 0) {
    console.log("Os dois números são positivos.")
}
else if (num1 > 0 || num2 > 0) {
    console.log("Pelo menos um dos dois é positivo.")
}
else {
    console.log("Os dois são negativos.")
}
console.log(`${num1} e ${num2}`)
*/

//Exercício 2
/*let valor1 = prompt("Valor 1: ")
let valor2 = prompt("Valor 2: ")

if (valor1 === valor2) {
    console.log("Valores iguais")
}
else {
    console.log("Valores diferentes")
}
console.log(`${valor1} e ${valor2}`)
*/

//Exercício 3
/*var numero = prompt("Digite um valor: ")

if (numero > 0) {
    console.log("Número positivo.")
}
else if (numero == 0) {
    console.log("Número Zero")
}
else {
    console.log("Número negativo.")
}
console.log(`${numero}`)*/

//Exercício 4
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operation = prompt("Escolha + para soma, ou - para subtrair: ")
let result;

switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;    
    default:
        result = "Operação inválida!";
}

console.log(` O resultado é: ${num1}${operation}${num2} = ${result}`)


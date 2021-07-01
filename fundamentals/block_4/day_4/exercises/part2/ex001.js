// let palavra;

function palindromo(palavra) {

if(palavra === palavra.split('').reverse().join('')){
    retornar = true
} else {
    retornar = false
}
    return retornar;
}

console.log(palindromo('arara'))
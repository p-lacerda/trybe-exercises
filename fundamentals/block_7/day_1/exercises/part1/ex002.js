const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const arranjo = () => oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${arranjo()} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

//  Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!?
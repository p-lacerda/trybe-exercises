// numbers = [1, 40, 3, 7, 29, 150, 100]
// let maior =  0
// for(index = 0; index < numbers.length; index += 1){
//     maior = Math.max(numbers[index])
// }

// console.log(maior)

// Versão em Reduce
// const getNum = ((result, number) => {
//     return Math.max(result, number)
// })

// const findBigger = numbers.reduce(getNum);

// console.log(findBigger)

// Outra versão em reduce
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 100);
console.log(bigger); // 85

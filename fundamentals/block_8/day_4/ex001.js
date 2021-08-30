const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Reduce e Filter 
const divisible = (number) => (number % 2 === 0)
const filter = numbers.filter(divisible)
const getNums = (total, number) => (total + number)
const sumNums = filter.reduce(getNums)

console.log(sumNums)

// Reduce
const getNums = (total, divisible) => (divisible % 2 === 0 ? total + divisible : total)
const sumNums = numbers.reduce(getNums)

console.log(sumNums)
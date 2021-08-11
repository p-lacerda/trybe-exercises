// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);

// const numeros = [3, 5, 7, 12, 123, 55, 90, 0, 13];

// numeros.sort((num1, num2) => num1 - num2)

// console.log(numeros)

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));
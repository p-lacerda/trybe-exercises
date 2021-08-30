// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Goiaba', 'Banana', 'Maçâ'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Ciriguela', 'Acerola', 'Morango'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));

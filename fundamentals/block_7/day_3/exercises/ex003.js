

const average = (array) => {
    array = [1, 2, 3, '4', 5]
    if (typeof array === 'string' || array.length === 0) { 
        return undefined;
      }
      let resulta = array.reduce((accumulator, currentValue) => (accumulator + currentValue));
      let tamanho = parseFloat(array.length);
      let resultado = resulta / tamanho;

  console.log(resultado)
    }
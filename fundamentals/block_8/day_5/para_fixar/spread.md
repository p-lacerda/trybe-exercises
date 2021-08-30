## Spread
Copia a informação de um array e pode ser usado para combinar arrays e objetos e pode ser usado em funções com múltiplos parâmetros.

### Como é ele
...array 

### Exemplo
Serve para espalhar os valores de um objeto iterável, como um array, em um novo objeto.

`const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]`

Outro exemplo:
`const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76`

## Dicas

Dá para usar o Math.max agora direto:
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

let listaDeProdutos;

listaDeProdutos = (produtos, precos) => produtos.map((product, index) => (
    { [product]: precos[index]}
));


console.log(listaDeProdutos(products, prices))
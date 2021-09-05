## Sintaxe

<!-- function({ target }) {
  const {name, value } = target

  this.setState ({
    [name]: value
  })
} -->

### Handle Genérico

<!-- 
handleChange({ target }) {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  this.setState({
    [name]: value,
  });
} -->

- Dê a cada elemento um nome que seja igual à respectiva chave no estado do componente
- No handler, recupere a partir do parâmetro event o nome do componente que disparou o evento e o valor associado ao disparo.
- Interpole o nome do componente como chave do estado numa sintaxe como a acima.
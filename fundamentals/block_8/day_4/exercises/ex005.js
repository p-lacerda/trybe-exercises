const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // Without reduce
  // var regexp = /A/gi
  // const name = names.toString()
  // if(name.match(regexp)){
  //   return name.match(regexp).length;
  // }

  return names.reduce((acc, curr) => 
    acc + curr.split('').reduce((acumulator, current) => {
      if (current === 'a' || current === 'A'){
        return acumulator + 1;
      }
      return acumulator
    }, 0), 0)
}

console.log(containsA())
// assert.deepStrictEqual(containsA(), 20);
const myRemove = require('./ex002');

it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
})

it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
})

it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    const myList = [4, 5, 9, 2]
    myRemove(myList, 2);
    expect(myRemove(myList)).toEqual([4, 5, 9, 2])
})

it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
})
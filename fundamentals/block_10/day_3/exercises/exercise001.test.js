function randNum () {
    return Math.floor(Math.random() * (100 - 0) + 0)
}

it('Testa se retorno é igual a 10', () => {
    randNum = jest
    .fn()
    .mockReturnValue(10);

    expect(randNum()).toBe(10)
    expect(randNum).toHaveBeenCalled()
    expect(randNum).toHaveBeenCalledTimes(1)

})



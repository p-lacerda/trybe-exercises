const math = require('./math');
jest.mock("./math");


test('teste de subtração', () => {
    math.subtrair.mockImplementation((a, b) => a - b)
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
})

test('teste de multiplicação', () => {
    math.multiplicar.mockImplementation((a, b) => a * b)
    .mockReturnValue(10)

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
})

test('teste de soma dois numeros', () => {
    math.somar.mockImplementation((a, b) => a + b)
    math.somar(1, 2);

    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    expect(math.somar(1, 2)).toBe(3);

})

test('teste de divisão', () => {
    const mockDividir = jest.spyOn(math, "dividir");
    mockDividir.mockReturnValue(15);
    mockDividir.mockReturnValueOnce(2);
    mockDividir.mockReturnValueOnce(5);

    expect(mockDividir(4, 2)).toBe(2);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(1);
    expect(mockDividir).toHaveBeenCalledWith(4, 2);

    expect(mockDividir(10, 2)).toBe(5);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(2);
    expect(mockDividir).toHaveBeenCalledWith(10, 2);

    expect(mockDividir(30, 2)).toBe(15);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(3);
    expect(mockDividir).toHaveBeenCalledWith(30, 2);
    
});

test('teste de subtração', () => {
    mockSubtrair = jest.spyOn(math, 'subtrair');
    mockSubtrair.mockReset();
    mockSubtrair.mockImplementation((a, b) => a - b)
    mockSubtrair.mockReturnValue(20);

    expect(mockSubtrair(40, 20)).toBe(20);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(40, 20);

    mockSubtrair.mockReset();
    mockSubtrair.mockReturnValue(30)
    expect(mockSubtrair(50, 20)).toBe(30);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(50, 20);
})
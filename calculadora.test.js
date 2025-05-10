const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  const calc = new Calculadora()

  it('Deverá retornar a soma de dois números', () => {
    expect(calc.soma(5, 3)).toBe(8)
  })

  it('Deverá retornar a subtração de dois números', () => {
    expect(calc.subtrai(10, 4)).toBe(6)
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    expect(calc.multiplica(6, 7)).toBe(42)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    expect(calc.divide(20, 4)).toBe(5)
  })

  it('Deverá lançar erro ao tentar dividir por zero', () => {
    expect(() => calc.divide(10, 0)).toThrow('Divisão por zero não é permitida')
  })
})

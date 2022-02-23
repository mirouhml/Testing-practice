const calculator = require('./task3');

describe('Add method tests', () => {
    it('Example 1', () => {
        expect(calculator.add(1,1)).toBe(2);
    })

    it('Example 2', () => {
        expect(calculator.add(2,1)).toBe(3);
    })

    it('Example 3', () => {
        expect(calculator.add(4,10)).toBe(14);
    })
})

describe('Subtract method tests', () => {
    it('Example 1', () => {
        expect(calculator.subtract(5,1)).toBe(4);
    })

    it('Example 2', () => {
        expect(calculator.subtract(3,5)).toBe(-2);
    })

    it('Example 3', () => {
        expect(calculator.subtract(12,4)).toBe(8);
    })
})

describe('Multiply method tests', () => {
    it('Example 1', () => {
        expect(calculator.multiply(5,6)).toBe(30);
    })

    it('Example 2', () => {
        expect(calculator.multiply(3,-5)).toBe(-15);
    })

    it('Example 3', () => {
        expect(calculator.multiply(12,0)).toBe(0);
    })
})

describe('Divide method tests', () => {
    it('Example 1', () => {
        expect(calculator.divide(5,2)).toBe(2.5);
    })

    it('Example 2', () => {
        expect(calculator.divide(6,-3)).toBe(-2);
    })

    it('Example 3', () => {
        expect(() => {
            calculator.divide(12,0);
          }).toThrow('The second number shouldn\'t be zero.');
    })
})
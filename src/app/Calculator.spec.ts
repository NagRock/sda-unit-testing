import {Calculator} from './Calculator';

describe('Calculator', () => {
    const calculator = new Calculator();

    it('should sum 10 and 20', () => {
        // when
        const result = calculator.sum(10, 20);

        // then
        expect(30).toEqual(result);
    });

    it('should divide 20 by 10', () => {
        // when
        const result = calculator.divide(20, 10);

        // then
        expect(2).toEqual(result);
    });

    it('should throw error when trying to divide by zero', () => {
        // when
        expect(() => {calculator.divide(20, 0); }).toThrow(new Error('division by zero'));
    });
});

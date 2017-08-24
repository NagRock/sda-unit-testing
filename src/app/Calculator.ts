export class Calculator {
    public sum(a: number, b: number): number {
        return a + b;
    }

    public divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error('division by zero');
        }
        return a / b;
    }
}

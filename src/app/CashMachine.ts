export class CashMachine {
    private amount = 0;

    public putMoney(amount: number): void {
        this.amount += amount;
    }

    public withdraw(amount: number): void {
        if (!this.hasAvailableAmount(amount)) {
            throw new Error('not enough money');
        }
        this.amount -= amount;
    }

    public hasAvailableAmount(amount: number): boolean {
        return this.amount >= amount;
    }
}

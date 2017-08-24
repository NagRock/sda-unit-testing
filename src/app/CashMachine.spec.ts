import {CashMachine} from './CashMachine';

describe('CashMachine', () => {
    let cashMachine;

    beforeEach(() => {
         cashMachine = new CashMachine();
    });

    describe('putting money', () => {
        it('should increase available amount', () => {
            // given

            // when
            cashMachine.putMoney(10);

            // then
            expect(cashMachine.hasAvailableAmount(10)).toBeTruthy();
            expect(cashMachine.hasAvailableAmount(10.01)).toBeFalsy();
        });
    });

    describe('withdrawing money', () => {
        it('should decrease available amount', () => {
            // given
            cashMachine.putMoney(20);

            // when

            cashMachine.withdraw(20);

            // then
            expect(cashMachine.hasAvailableAmount(0.01)).toBeFalsy();
        });

        it('should throw error when given amount is not available', () => {
            // given
            cashMachine.putMoney(29.99);

            // when
            expect(() => {cashMachine.withdraw(30); }).toThrow(new Error('not enough money'));
        });
    });
});

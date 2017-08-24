import {AdultChecker} from './AdultChecker';

describe('AdultChecker', () => {
    const adultChecker = new AdultChecker();

    it('should return false if someone is 17 years old', () => {
        // when
        const result = adultChecker.isAdult(17);

        // then
        expect(false).toEqual(result);
    });

    it('should return true if someone is 18 years old', () => {
        // when
        const result = adultChecker.isAdult(18);

        // then
        expect(true).toEqual(result);
    });

    it('should return true if someone is 19 years old', () => {
        // when
        const result = adultChecker.isAdult(19);

        // then
        expect(true).toEqual(result);
    });
});

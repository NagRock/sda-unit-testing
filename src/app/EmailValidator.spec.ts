import {EmailValidator} from './EmailValidator';

describe('EmailValidator', () => {
    const validateEmailData = [
        {email: 'sample@gmail.com', expectedResult: true},
        {email: 'sample@gmail.poland.com', expectedResult: true},
        {email: 'sample@gmail.poland.qdqwdqwdqwd.com', expectedResult: true},
        {email: '', expectedResult: false},
        {email: 's', expectedResult: false},
        {email: 'sample@', expectedResult: false},
        {email: 'sample@gmail', expectedResult: false},
        {email: 'sample@gmail./c', expectedResult: false},
        {email: 'sample@gmail.@c', expectedResult: false},
        {email: 'sample@gmail.com', expectedResult: true},
        {email: 'samplegmail.com', expectedResult: false},
        {email: '@gmail.com', expectedResult: false},
        {email: 'sample@@gmail.com', expectedResult: false},
        {email: 'sample@gmail..com', expectedResult: false},
        {email: 'sample@', expectedResult: false},
        {email: 'sample@gmail.com123', expectedResult: false},
    ];

    for (const data of validateEmailData) {
        it('should validate email', () => {
            // given
            const emailValidator = new EmailValidator();

            // when
            const result = emailValidator.validate(data.email);

            // then
            expect(data.expectedResult).toEqual(result);
        });
    }
});













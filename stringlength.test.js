const stringLength = require('./stringLength');

test('Returns lenght of a string', () => {
    const name = 'Mukumbuta';
    expect(stringLength(name)).toBe(9);
    expect(stringLength(name)).not.toBe(6);
});

test('Throw errors', () => {
    const name = 'posocamazuilcomap';
    expect(stringLength(name)).toBe('Error: Name must be between 1 and 10 character(s) long!');
    expect(stringLength('')).toBe('Error: Name must be between 1 and 10 character(s) long!')
});
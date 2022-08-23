const capitalize = require("./capitalize");


test('Returns a capitalized string', () => {
    const name = 'emmanuel';
    expect(capitalize(name)).toBe('Emmanuel')
});
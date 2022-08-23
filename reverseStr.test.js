const reverseStr = require('./reverseStr');


test('Return string reversed', () => {
    const word = 'Mukumbuta';
    expect(reverseStr(word)).toBe('atubmukuM');
});
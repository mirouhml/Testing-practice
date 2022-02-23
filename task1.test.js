const stringLength = require('./task1')

it('Success', () =>{
    expect(stringLength('Hello')).toBe(5)
})

it('No text is found error', () => {
    expect(() => {
      stringLength('');
    }).toThrow('No text is found.');
})

it('Text is longer than 10 characters error', () => {
    expect(() => {
      stringLength('Hello world!!');
    }).toThrow('Text is longer than 10 characters.');
})


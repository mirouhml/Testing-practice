const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => {
    if (b === 0)
        throw new Error('The second number shouldn\'t be zero.')
    else return a / b;
}

module.exports = { add, multiply, divide, subtract }
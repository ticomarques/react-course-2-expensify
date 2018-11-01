const add = (a, b) =>  a + b;

test('It should add two numbers', () => {
    const result = add(4, 3);
    /*if (result != 7) {
        throw new Error(`You added 3 and 4, the result was ${result}. While it sould be 7`); 
    }*/
    expect(result).toBe(7);
});
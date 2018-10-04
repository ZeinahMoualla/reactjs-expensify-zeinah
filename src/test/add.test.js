/*const add = (a,b) => a+b;

test ("Sould add two numbers" , () => {
    const result = add(5,5);
    if(result !== 10) {
            
    } 
    expect(result).toBe(10);      
      
});*/

const generateGreeting= (name = "Anonymous") => `Hello ${name}`;

test("Should greet the person", () => {
    const result = generateGreeting("Hasna");

expect(result).toBe("Hello Hasna");
});

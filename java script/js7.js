let fibTerms = 10;
let a = 0, b = 1;
console.log(`\n7. Fibonacci series up to ${fibTerms} terms:`);
for (let i = 1; i <= fibTerms; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}
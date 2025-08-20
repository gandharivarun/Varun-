let primeNum = 29;
let isPrime = true;
if (primeNum <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(primeNum); i++) {
        if (primeNum % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(`\n10. ${primeNum} is ${isPrime ? "a Prime Number" : "Not a Prime Number"}`);

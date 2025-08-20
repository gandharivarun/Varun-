let digitNum = 987654;
let count = 0;
let tempNum = digitNum;
while (tempNum > 0) {
    tempNum = Math.floor(tempNum / 10);
    count++;
}
console.log(`\n8. Number of digits in ${digitNum}: ${count}`);
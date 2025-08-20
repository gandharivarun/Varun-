let str = "HelloWorld";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(`\n9. Reverse of "${str}": ${reversedStr}`);
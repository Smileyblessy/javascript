let str = input.toString();
let a = 0;
let b = str.length - 1;
while (a < b) {
    if (str[a] !== str[b]) {
        return false;
    }
    a++;
    b--;
}
console.log("The input is a palindrome!");
return true;
//to count number of vowels in a string


var str='blessy'
var vowels=['a','e','i','o','u'];
var newarr=str.split('').filter(i=>vowels.includes(i)).length
console.log(newarr)
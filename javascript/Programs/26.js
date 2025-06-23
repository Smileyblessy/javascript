//26. Write JavaScript program to create new array of leap years from given array

var arr=[2002,2003,2004,1995,1997,1999,2024,2025,2030]
var newarr=arr.filter((i)=>((i%4==0 || i%400==0 && i%100==0)))
console.log(newarr)
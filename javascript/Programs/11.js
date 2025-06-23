//to remove duplicate elements from an array.

var a=[1,3,3,6,5,7,9,8,0,12,48]
var b=a.filter((item,index)=>a.indexOf(item)==index)
console.log(b)
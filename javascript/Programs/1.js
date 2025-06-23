//Diff b/w biggest and smallest numbers of an array

var arr=[17,3,24,7,1,34,8];
var max=arr[0]
var min=arr[0]
for(let temp of arr)
{
    if(temp>max)
        max=temp;
    if(temp<min)
        min=temp;
}
console.log(max)
console.log(min)
console.log(max-min)
//To find the average of arr of elements in an array of numbers

var arr=[4,19,13,2,4];
var sum=0;
var average=arr[0];
for(let i=0;i<arr.length;i++)
{
    sum=sum+arr[i];
}
average=parseInt(sum/2);
console.log(average);

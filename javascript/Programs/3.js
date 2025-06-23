//To print sum of even no's from given arr

var arr=[1,2,5,6,22,30];
var sum=0;
for(let i=0;i<arr.length;i++)
{
        if(arr[i]%2==0)
        {
            sum=sum+arr[i];
        }
}
console.log(sum);
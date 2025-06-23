//to check given number is palindrome number or not

let n=123
let m=n
let sum=''
while(n>0)
{
    rev=n%10
    sum=sum+rev
    n=parseInt(n/10)
}
if(n==sum)
{
    console.log("palindrome")
}
else{
    console.log("notpalindrome")
}

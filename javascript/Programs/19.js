//To check given number is amstrong or not

let num=123;
let counter=0;
let sum=0;
let a=num;
while(num!=0)
{
    num=parseInt(num/10);
    counter++
}
let rem;
num=a;
while(num>0)
{
    rem=num%10;
    sum+=rem**counter;
    num=parseInt(num/10);
}
if(sum==a)
{
    console.log( `${a} is amstrong number`);
}
else{
    console.log(`${a} is not a amstrong number`);
}
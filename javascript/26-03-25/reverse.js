let num=765;
let sum="",rem;
while(num!=0)
{
    rem=num%10;
    sum=sum+rem;
    num=parseInt(num/10);
}
console.log(sum);
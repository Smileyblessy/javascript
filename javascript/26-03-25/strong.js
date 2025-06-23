let num=145;
let rem,sum=0;
let temp=num;
while(num!=0)
{
    rem=num%10;
    fact=1;
    while(rem>1)
    {
        fact=fact*rem;
        rem--;
    }
    sum+=fact;
    num=parseInt(num/10);
}
if(sum==temp)
{
    console.log(temp+"strong");
}
else{
    console.log("not strong");
}
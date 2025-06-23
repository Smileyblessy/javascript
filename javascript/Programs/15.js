//to check given number is strong number or not

var a=456;
var sum=0;
var t=a;
while(a!=0)
{
    r=a%10;
    var fact=1
    while(r!=0)
    {
        fact=fact*r;
        r--
    }
    sum+=fact
    a=parseInt(a/10)
}
if(sum==t)
{
    console.log(`${t} is strong number`)
}
else{
    console.log(`${t} is not strong number`)
}
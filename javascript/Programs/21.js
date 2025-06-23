// to print N digits in fibonacci series 

let a=0,b=1;
let n=100;
console.log(a);
while(b<=n)
{
    console.log(b);
    [a,b]=[b,a+b];
}
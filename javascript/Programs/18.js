//to print GCD of given two numbers

let a=24;
let b=18;
while(b!=0)
{
    temp=b;
    b=a%b;
    a=temp;
}
console.log(a);

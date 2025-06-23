 function Incr()
{
    let a=1;
    function somevalue()
    {
        return a++;
    }
    return somevalue;
}
b=Incr();
console.log(b());
console.log(b());
console.log(b()); 




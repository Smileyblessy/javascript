//to print prime numbers between 1 to 100


for(let n=1;n<=100;n++)
{
    let isFlag=true;
    if(n<=1)
    {
        isFlag=false;
    }
    else
    {
        for(let i=2;i*i<=n;i++)
        {
            if(n%i === 0)
            {
                isFlag=false;
                break;
            }
        }
    }
    if(isFlag)
    {
        console.log(n);
    }
}
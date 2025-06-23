let isFlag=true;
let n=10;
if(n<=1) isFlag=false;
if(n==2||n==3) isFlag=true;
if(n%2==0 || n%3==0) isFlag=false;
for(let i=5;i<=parseInt(n/2);i+=6)
    {
        if(n%i==0|| n%(i+2)==0) isFlag=false;
    }
    console.log(isFlag?"Prime":"not Prime");                                                                                                   
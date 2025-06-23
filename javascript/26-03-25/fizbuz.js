for(let i=1;i<100;i++)
{
    let str=""
    if(i%3==0) str+="fizz";
    if(i%5==0) str+="buzz";
    console.log(str||i);
}
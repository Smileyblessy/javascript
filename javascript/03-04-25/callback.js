function hello()
{
    console.log("Welcome to DRF");
}
function greet(myfun)
{
    console.log("HelloWorld");
    myfun();
}
setTimeout(greet,3000,hello)
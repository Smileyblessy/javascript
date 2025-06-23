// Given an array of objects representing students, use the map method to create a new array of objects where each object has
//  an additional property isAdult that is true if the student's age is 18 or above, and false otherwise.
// students = [ { name: 'John', age: 17 },
//              { name: 'Jane', age: 19 },
//              { name: 'Jack', age: 18 }];


function students(name,age)
{
    this.name=name;
    this.age=age;
}
var s1=new students("Blessy",21)
var s2=new students("Pooja",25)
var s3=new students("shiya",10)
var s4=new students("jashrith",13)
var newarr=[s1,s2,s3,s4]
// for(let a of newarr)
// {
//     if(a.age>18)
//     {
//         for(let k in a)
//         {
//             console.log(`${k}`,`${a[k]} is Adult`)
//         }
//     }
// }
// In newarr print the age is above 18 is true, otherwise false 
var persons=newarr.map((s)=>
{
    return{
        ...s,
        isAdult:s.age>18
    }
})
console.log(persons)
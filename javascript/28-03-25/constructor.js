function course(courseName,company,strength,fee,trainer)
{
    this.courseName=courseName;
    this.company=company;
    this.strength=strength;
    this.fee=fee;
    this.trainer=trainer;
}
var c1 = new course("Full Stack","DRF","30","40000","Bhaskar");
var c2 = new course("Data Science","DRF","50","50000","Santhi")
var c3 = new course("Soft skills","Tech jobs","30","40000","Amarnath Reddy");
var c4 = new course("Electric vehicle training","greenjobs","60","25000","Uday");
var coursearray=[c1,c2,c3,c4];
for(let a of coursearray)
{
    for(let k in a)
    {
        console.log(`${k}:${a[k]}`);
    }
    console.log("....");
}
var coursearray=[c1,c2,c3,c4];
for(let a of concurrency)
{
    if(a.fee<=30000)
    {
        for(let k in a)
        {
            console.log(`${k}:${a[k]}`)
        }
        console.log("....")
    }
}

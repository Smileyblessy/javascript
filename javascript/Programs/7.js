//Write a JavaScript program to print student details who got highest marks, create objects using class//


function students(studentName,subject,marks){
    this.studentName=studentName,
    this.subject=subject,
    this.marks=marks
}
var s1=new students("Pooja","English","580")
var s2=new students("Indhu","Hindi","500")
var s3=new students("Gayatri","Telugu","560")
var s4=new students("Amulya","Maths","570")
var studentsarray=[s1,s2,s3,s4]
var max=studentsarray[0]
for(let i=0;i<studentsarray.length;i++)
{
    if(studentsarray[i].marks>max.marks)
    max=studentsarray[i]
}
console.log(max)
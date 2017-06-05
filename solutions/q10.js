//Q10. Write a program which accept average marks of the student achieved in exams and convert them into grade
// and display ratings of each student, grades and ratings can be calculated asper the following table:
/*
Range   	     Grade	Rating
>=0 and <= 60	  F	    Poor
>=61 and <= 70	D	    Fair
>=71 and <= 80	C	    Average
>=81 and <= 90	B	    Good
>=91 and <=100	A	    Excellent
*/

const studentDetails = [
  {name:'David',marks:80},
  {name:'Vinoth',marks:77},
  {name:'Divya',marks:88},
  {name:'Ishitha',marks:95},
  {name:'Thomas',marks:68}
];




let studentsGradeRatingArr=[];

function avg(marks)
{
  let studentsGrade=[];
        if (marks >=0 && marks <= 60){
              
          studentsGrade.push("E");           
          studentsGrade.push("Poor");  

          } 
          
          
        else if (marks>=61 && marks <= 70) {
               studentsGrade.push("D");           
          studentsGrade.push("Fair");
          } 
          
        else if (marks>=71 && marks <= 80) 
             {

              studentsGrade.push("C");           
          studentsGrade.push("Average");


          
          } 
          
         else if (marks>=81 && marks <= 90) {
                studentsGrade.push("B");           
          studentsGrade.push("Good");
          } 
          

           else if (marks>=91 && marks <= 100) {
               studentsGrade.push("A");           
          studentsGrade.push("Excellent");
          } 
          
}
studentDetails.forEach(function(data)
{
  let grade=avg(data.marks);
  let obj={};
  obj={
    "name":data.name,
    'grade':grade[0],
    "rating":grade[1]
  }
  studentsGradeRatingArr.push(obj);


});



console.log(studentsGradeRatingArr)




module.exports = studentsGradeRatingArr;

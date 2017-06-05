//Q1. Write a program to display the current date in the following format mm/dd/yyyy?

module.exports = function(out){
 let today= new Date();  
let d = today.getDate();  
let m= today.getMonth()+1;   
let y= today.getFullYear();  
// today=(m+"/"+d+"/"+y);
// console.log(today);
  out(m+"/"+d+"/"+y);
}

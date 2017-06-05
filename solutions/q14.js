//Q14.  Write a program to build a (pyramid) of "*" for a given number of rows. for example rows = 6 ?

//Write your code here
var a,b,chr;
for(a=1; a <=6; a++)
{
   for (b=1; b < a; b++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}	
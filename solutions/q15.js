// Q 15. Consider the following array of objects and solve the problem statements blow:-
// a) Display all objects with occupation as 'Programmer'
// b) Sort the object basis the age key in the descending order
// c) Recreate the above array of objects into the following object of objects :{ 'Developer' : [{'name':_____________, 'age':__________},{}],'<anotheroccupation>': [{'name':______________, 'age':________},{}]}
// d) Use the map function to create a new array of names present in myObj.
// Expected output:
// [ 'Arun','Ashish','Kalyani','David','Priya','Venkat' ]

var myObj =[{'name':'Arun', 'age': 30, 'occupation': "Developer"},
{'name':'Ashish', 'age': 32, 'occupation': "Developer"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'David', 'age': 27, 'occupation': "Programmer"},
{'name':'Priya', 'age': 22, 'occupation': "Programmer"},
{'name':'Venkat', 'age': 28, 'occupation': "Programmer"}];

//Write your code here
let occupationArray=myObj.filter(function(data){
console.log(data.occupation);
  
});


let occupationArr=myObj.filter(function(data){

  return data.occupation==="Programmer";
});


myObj=myObj.sort(function(a,b){
   return b.age-a.age;
 });


let a1=[],a2=[];

myObj.forEach(function(data){

  if(data.occupation==='Developer'){
   // obj={};
    obj={
      'name':data.name,
      'age':data.age
    }
    a1.push(obj);
  }
  else if(data.occupation==='Programmer'){
  //  obj={};
     obj={
      'name':data.name,
      'age':data.age
    }
    a2.push(obj);

}
});
let newObj={
  'Developer':a1,
  'Programmer':a2
}
console.log(newObj);
let nameArr=myObj.map(function(data){
  return data.name;
});

module.exports = {
  c: occupationArr,
  d: newObj,
  e: nameArr
};
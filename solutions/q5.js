//Q5. Write a function which takes array as argument and remove duplicates elements and returns a new array.
// INPUT
var arr=[1,1,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

function removeDuplicates(arr){
 arr = arr.filter (function (value, index) { 
    return arr.indexOf (value) == index;
});
 return arr;
}
module.exports = removeDuplicates;

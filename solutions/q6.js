// 6. Write a function to find the difference of two arrays?

function difference(arr1,arr2) {
var temp = [];
var arr1 = [1, 2, 3];
var arr2 = [100, 2, 1, 10];

arr1.forEach(function(value) {
if(arr2.indexOf(value) === -1) temp.push(value);
})
arr2.forEach(function(value) {
if(arr1.indexOf(value) === -1) temp.push(value);
});
return temp;

};
console.log(difference());
module.exports = difference;

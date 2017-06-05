//Q16. Flatten the following object :

let arr = [5, [22], [[14]], [[4]],[5,6]];
const temp = [];

function flatten(arrArg) {
 arr=arrArg.join().split(',').map(Number);
 return arr;
};

const newArr = flatten(arr);
console.log(newArr)

module.exports = newArr;

//Q2: Write a function that accepts numbers as input with spaces in between (such as: 1 2 3 ) and returns highest and the lowest number?

function highestAndLowest(numbers)
{
 numbers=numbers.split('');
console.log(Math.max.apply(null,numbers));
    return Math.max.apply(null,numbers)+Math.min.apply(null, numbers);
}
module.exports = highestAndLowest;

// Q11. Write a function that can accept a string and return the same after arranging it into alphabetical order.
/* Example String: 'webmaster'
Expected Output: 'abeemrstw
*/

var string='webmaster';
function sorting(x) {
	return string.split('').sort();
}
console.log(sorting(string).join(''));

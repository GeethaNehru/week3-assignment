//Q12. Write a function that accepts two arguments, first as string and other as a letter and the function will count the number of occurrences of the specified letter within the string.
/* Sample arguments: 'gmail.com', 'o'
Expected output: 1
*/

function char_count(str, letter)
{
		var count=0;
		for(i=0;i<str.length;i++)
		{
			if(str.charAt(i)==letter)
				count++ ;
		}
		return count;
	
	
}
console.log(char_count("geetha",'e'))


module.exports = char_count;

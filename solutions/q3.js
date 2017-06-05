//Q3. Write a program that it takes numbers as input and separate the numbers by inserting dash (-) between two even numbers
//For example if numbers is 12345648 the output should be 123456-4-8.
let nums = "12345648";
module.exports = function(nums,out){
  nums=nums.split('');
  for(let i=0;i<nums.length-1;i++)
  {
  	if(((nums[i]%2)==0)&& ((nums[i+1]%2)==0))
  	{
  		nums.splice((i+1),0,'-');
  	}
  }
  let result=nums;
    out(result.join(''))
  }
//}

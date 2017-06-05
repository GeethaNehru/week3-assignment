//Q13. Write a program to list (Fibonacci) series till a given number?

fibonacci = function(numMax, done){
let i;
let fibonacci = []; // Initialize array!

fibonacci[0] = 0;
fibonacci[1] = 1;
for(i=2; i<=numMax+1; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
    
}
console.log(fibonacci)
return fibonacci;
}
module.exports = fibonacci;

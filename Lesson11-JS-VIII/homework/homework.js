// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if(n===0)return 1;
  var value=1;
  for(var i=1; i<=n; i++){value*=i;}
  return value;
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  var f0 = 0, f1 = 1, f2=f0; 
  while (n>0){ 
    f2 = f1 + f0; 
    f0=  f1;
    f1 = f2; 
    n--; 
  } 
  return f2;
// or the following standard recursion approach
// if (n <= 1) return 1; 
// return nFibonacci(n-1)+nFibonacci(n-2);
} 


// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};

// Do not change any of the function names
//
// Because I can not download using npm test JSV.test.js, 
// therfore I changed the code and tested seperately at repl.it
function invokeCallback(cb) {
  // invoke cb
  return cb();
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  cb=0.0;
  for(var i=0; i<numbers.length; i++){
     cb+=numbers[i];
  }
// or cb=numbers.reduce(function(total,item){return total+item;})
//
}

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  cb=[];
  for(var i=0; i<arr.length; i++){
      cb[i]=arr[i];
  }
  return cb;
}

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
  const newVar=[];
  for(var i=0; i<arr.length; i++){
    cb=arr[i];
    newVar[i]=cb;
  } 
  return newVar;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};

// Do not change any of the function names
// Because I can not download using npm test JSV.test.js, 
// therfore I changed the code and tested seperately at repl.it
function createUserClass() {
  // create an ES6 class or a constructor function called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the class
  function Usertest(options){
    this.username=options.username;
    this.name=options.name;
    this.email=options.email;
    this.password=options.password;
  }
  Usertest.prototype.sayHi=function(){
    return 'Hello, my name is'+this.name;
  };
  return Usertest;
 }


//let objtest={}, str='test from lambdaschool';
//objtest.username='James';
//objtest.name='James Bond';
//objtest.email='email@w3.org';
//objtest.password='psd';
//const Usertest =new createUserClass(objtest); 
//Usertest.sayHi();
//console.log('new object is created');
// console.log(User.sayHi());


function addPrototypeMethod(TestTest) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
    TestTest.prototype.sayHi=
          function(){return 'Hello World!';};
          return TestTest;
}

//console.log(testp.sayHi());

function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
 // ***** manipulate text-string (very interesting)
 String.prototype.reverse = function() {
   // use 3 steps method, gurus often use Cascading to write it in one line.
   let strArr= this.split(''); 
   strArr=strArr.reverse();
   strArr=strArr.join('');
  return strArr;  
   };  

}


// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};

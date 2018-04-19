// Do not change any of the function names
// Because I can not download using npm test JSV.test.js, 
// therfore I changed the code and tested seperately at repl.it
function createUserClass(obj) {
  // create an ES6 class or a constructor function called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the class
  //class UserClass{constructor(username,name,email){
    this.username=obj.username;
    this.name=obj.name;
    this.email=obj.email;
    this.password=obj.password;
    this.sayHi=function(){var hello="Hello, my name is ";
                         hello+=obj.name;
      return hello};
 }
obj={};
obj.username='James';
obj.name='James Bond';
obj.email='email@w3.org';
obj.password='psd';
const User =new createUserClass(obj); 
console.log('new object is created');
console.log(User.sayHi());


//function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
 // [Constructor].prototype.sayHi={
//    function(){return 'Hello World!'}};
//}
function Testp() {
  this.test = true;
}
Testp.prototype.sayHi=
function(){return 'Hello World!'};
//		addPrototypeMethod('Testp');
var testp = new Testp();
console.log(testp.sayHi());

function addReverseString(str) {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
  this.reverse=function(){
   var reverseString=str.split("");
    var len=reverseString.length;
    console.log(len);
      for (var i=0; i<len/2; i++){
        var j=reverseString[i];
        reverseString[i]=reverseString[len-i-1];
        reverseString[len-i-1]=j;
    }
    var reverseString1=reverseString.join("");
    return reverseString1;    
  }
  return this;
}

var strReverse=new addReverseString(str);
console.log(strReverse.reverse());

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};

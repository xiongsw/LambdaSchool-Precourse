// Do not change any of the function names

function makeCat(name, age) {
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
  let Cat={};
  Cat.name=name;
  Cat.age=age;
  Cat.meow=function (){return 'meow'};
  return Cat;
}

function addProperty(object, property) {
  // add the property to the object with a value of null
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
  object[property]=null;
  return object;
}

function invokeMethod(object, method) {
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
  for(var key in Object.keys(object)){
      if(key===method)object.key();
  }
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
  let product=mysteryNumberObject[mysteryNumber]*5;
  return product;
}

function deleteProperty(object, property) {
  // remove the property from the object
  // return the object
  delete object.property;
  return object;
}

function newUser(name, email, password) {
  // create a new object with properties matching the arguments passed in.
  // return the new object
  let NewUser={};
  NewUser.name=name; 
  NewUser.email= email;
  NewUser.password=password;
  return NewUser;
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  // otherwise return false
   for(var key in Object.keys(user)){
     if(key==='email'||user[key]!==null)return true;}
   return false;
}

function hasProperty(object, property) {
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
  var tempString=arguments[1];
  for(var key in Object.keys(user)){if(user[key]===tempString)return true;}
  return false; 
}

function verifyPassword(user, password) {
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
  for(var key in Object.keys(user)){
    if(key==='password'||user[key]!==password)return true;}
  return false;
}

function updatePassword(user, newPassword) {
  // replace the existing password on the user object with the value of newPassword
  // return the object
  user[password]=newPassword;
  return user;
}

function addFriend(user, newFriend) {
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
  var friendNumber=user.friends.length;
  user.friends[friendNumber]=newFriend;
}

function setUsersToPremium(users) {
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
   var usersNumbers=users.length;
   for(var i=0; i<usersNumbers; i++){
    users[i].isPremium=true;
   }
   return users;
}

function sumUserPostLikes(user) {
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
  var sum=0, postsNum=user.posts.length;
  for(var i=0; i<postNum; i++){
    sum+=user.posts[i].likes;
  }
   return sum;
}

function addCalculateDiscountPriceMethod(storeItem) {
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // return storeItem at the end of the function
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
  var discountPrice=0.;
  storeItem.calculateDiscountPrice=function(){
    storeItem.price*(1.0-storeItem.discountPercentage)}
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod,
};

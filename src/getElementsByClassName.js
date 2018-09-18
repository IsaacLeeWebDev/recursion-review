// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
// your code here
//input: string, which represents className
//output: an array, containing all elements with input className
//strategy: check length of the children prop
//if length > 0, check the class, then recurse
//otherwise, just check the class and return our array

  var result = [];

  let obj;

  if (arguments[1] === undefined) {
    obj = document.body; // document.body;
  } else {
    obj = arguments[1];
  }

  if (obj.classList !== undefined) {
    if (obj.classList.contains(className)) { // classList.contains(className)
      result = result.concat(obj);
    }
  } 

  if (obj.childNodes.length === 0) { // childNodes.length
    return result;
  }

  for (let i = 0; i < obj.childNodes.length; i++) {
    result = result.concat(getElementsByClassName(className, obj.childNodes[i])); //forEach of ChildNodes
  }

  return result;
};

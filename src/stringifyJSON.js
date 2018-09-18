// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if (Number.isNaN(obj) || obj === null) {
    return 'null';
  }

  if (typeof(obj) === 'number' || typeof(obj) === 'boolean' || Object.prototype.toString.call(obj) === '[object Date]') {
    return String(obj);
  }

  if (typeof(obj) === undefined || obj === undefined || typeof(obj) === 'symbol' || typeof(obj) === 'function') {
    return undefined;
  }

  if (typeof(obj) === 'string') {
    return String('\"' + obj + '\"');
  }
  
  if (typeof(obj) === 'object') {
    var result = '';
  
    if (Array.isArray(obj)) {

      result = result.concat('[');

      for (var i = 0; i < obj.length; i++) {
        if (i === obj.length - 1) {
          result = result.concat(stringifyJSON(obj[i]));
        } else {
          result = result.concat(stringifyJSON(obj[i]) + ',');
        }
      }
      
      result = result.concat(']');

      return result;
    }

    for (var key in obj) {
      if (obj[key] !== undefined && stringifyJSON(obj[key]) !== undefined) {
        result = result.concat(stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',');
      }
    }
    result = result.split('').slice(0, result.length - 1).join('');
    result = '{' + result + '}';
    return result;
  }
 
};

// your code goes here
//input: object
//output: a string comprised of: 
//for objects: property names get stringified
//for arrays: no property names or quotation marks around brackets

// > '{'x':5,'y':6}'
// > '[3,'false',false]'
// > '{'null':[10,null,null,null]}'
// ''2006-01-02T23:04:05.000Z''
// 'numbers' '2' 
// 'strings' ''hi''
// 'booleans' 'true'
// 'undefined' undefined
// 'null' 'null'
// 'NaN' 'null'
// > '{}' '{}'
// > '[]' '[]'
// 'Symbol('')' undefined
// 'functions' undefined

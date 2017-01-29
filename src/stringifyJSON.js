// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var resultString = '';	
  // your code goes here
  if (obj == null) {
  	//null cases
    resultString  = 'null';
  } else if (obj === undefined) {
    // undefined cases
    resultString = undefined;
  } else if (typeof obj === 'string') {
  	// string cases
  	resultString = '\"'+obj+'\"';
  } else if (typeof obj === 'object') {
  	// objects and arrays
    if (Array.isArray(obj)) {
    	//array cases
      resultString += '[';
      for (var i = 0; i < obj.length; i++) {
        if (resultString[resultString.length - 1] !== '[') {
            resultString += ',';
    	}
        resultString += stringifyJSON(obj[i]);
      }
      resultString += ']';
    } else {
      // object cases
      resultString += '{';
      for (var i in obj) {
    	if (obj[i] !== undefined && (typeof obj[i]) !== 'function' ) {
          if (resultString[resultString.length - 1] !== '{') {
            resultString += ',';
    	  }
    	  resultString += stringifyJSON(i);
          resultString += ':'
          resultString += stringifyJSON(obj[i]);
    	}
      }
      resultString += '}';
    }
  } else {
  	resultString = obj.toString();
  }

  return resultString;
};

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var extend = function(targetArray, original) {
  for(var i = 0; i < original.length; i++) {
    targetArray.push(original[i]);
  }
  return targetArray;
}

var listOfElementsOfClass = function(className, node_list) {
  if (node_list === undefined) {
    return [];
  }

  var results = [];	
  for(var i in node_list) {
  	var classes = node_list[i].classList;
  	if(classes !== undefined) {

  	  var j = 0; 
  	  var isClass = false
  	  while(j < classes.length && (!isClass)) {
        if (classes[j] === className) {
          results.push(node_list[i]);
          isClass = true;
        }
        j++;
  	  }
  	  results = extend(results, listOfElementsOfClass(className, node_list[i].childNodes));
    }
  }
  return results;
}


var getElementsByClassName = function(className) {
  // use document.body, element.childNodes, and element.classList
  var body = document.body;
  return listOfElementsOfClass(className, {body: body});
 
}

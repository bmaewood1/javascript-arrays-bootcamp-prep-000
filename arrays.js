var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){
  var newarray = [array, ...element]
  return newarray
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}


function addElementToEndOfArray(array, element) {
  return [...element, array];
}


function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}


function accessElementInArray(array, index) {
  return array[index];
}


function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}


function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(); return array;
}


function removeElementFromBeginningOfArray(array){
   return array.slice(1)
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}


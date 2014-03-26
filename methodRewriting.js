//.push
//exist on array instance

Array.prototype.add = function() {
  //take anything and assign it the last element of an array
    for(var i = 0; i < arguments.length; i++) {
      this[ this.length ] = arguments[i];
    }
};

//pop
Array.prototype.last = function() {
  //does not mutate the array
  //returns the last element in the array
  return this[ this.length - 1]
};

//shift
//removes the first element and returns the element
Array.prototype.first = function() {
  var firstElement = this[0];
  for(var i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }
  this.length = this.length - 1;
  return firstElement;
};

//unshift
//adds new element to the beginning and returns the length
Array.prototype.addNew = function() {
  //assign new this[0]
  //shift all other elements 1 to the right
  //return length of the mutated array
  var count = 0;
  for(var i = this.length - 1; i >= 0; i--) {
    this[i + arguments.length] = this[i];
  }
  for(var i = 0; i < arguments.length; i++) {
    this[count] = arguments[i];
    count += 1;
  }
  return this.length;
};




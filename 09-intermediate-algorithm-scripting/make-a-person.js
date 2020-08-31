var Person = function(firstAndLast) {
  this.getFullName = function() {
    return firstAndLast;
  };

  this.getFirstName = function() {
    return firstAndLast.split(' ')[0];
  };

  this.getLastName = function() {
    return firstAndLast.split(' ')[1];
  };

  this.setFirstName = function(name) {
    this.setFullName(`${name} ${this.getLastName()}`);
  }

  this.setLastName = function(name) {
    this.setFullName(`${this.getFirstName()} ${name}`);
  };

  this.setFullName = function(name) {
    firstAndLast = name;
  };

  return this.getFullName();
};

var bob = new Person('Bob Ross');
bob.getFullName();
console.log(bob.getLastName())

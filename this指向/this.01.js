var name = "window";

var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};

function sayName() {
  var sss = person.sayName;
  sss(); 
  person.sayName(); 
  (person.sayName)();
  (b = person.sayName)(); 
}

sayName();

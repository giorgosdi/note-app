var square = (x) =>  x * x;
console.log(square(9));


var user = {
  name: "Giorgos",
  sayHi: () => {
    console.log(`Hi im ${this.name}`);
    console.log(arguments);
  },
  sayHiAlt () {
    console.log(`Hi im ${this.name}`);
    console.log(arguments);
  }
}
user.sayHiAlt(1,2,3,4)

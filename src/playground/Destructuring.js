console.log("Destructuring ");

//Object destructuring
const person = {
  name: "Santosh",
  age: 23,
  address: {
    street: "1860 E hayden ln",
    city: "Tempe"
  }
};

const { name: firstName = "Anon", age } = person;

const { street: firstLine, city } = person.address;

console.log(
  `${firstName} is ${age} years old and lives on ${firstLine} of ${city}`
);

//Array destructuring
const address = ["1860 E Hayden lane", "Tempe", "Arizona"];
const [, cityy, state] = address;

console.log(`You are in ${cityy},${state}`);
